from django.shortcuts import render
import json
import numpy as np
import networkx as nx
import requests
import base64
import community.community_louvain as community_louvain  # Louvain community detection
from django.http import JsonResponse
from sklearn.metrics.pairwise import cosine_similarity
from .models import Track


# Spotify API credentials
CLIENT_ID = '897a6277f3ab4181a598d00bce4b4eef'
CLIENT_SECRET = '626c13fbb7ce4f9c96af0a110901872b'

def get_token():
    # Encode client_id and client_secret to base64
    auth_header = base64.b64encode(f"{CLIENT_ID}:{CLIENT_SECRET}".encode()).decode()

    # Request token from Spotify
    token_url = 'https://accounts.spotify.com/api/token'
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': f'Basic {auth_header}',
    }
    data = {
        'grant_type': 'client_credentials',
    }

    response = requests.post(token_url, headers=headers, data=data)
    response_data = response.json()
    return response_data.get('access_token')

def get_track_image(track_ids):
    if not track_ids:
        return []

    access_token = get_token()

    # Spotify API endpoint for getting multiple tracks
    url = "https://api.spotify.com/v1/tracks"
    
    # Set up headers with the access token
    headers = {
        "Authorization": f"Bearer {access_token}"
    }
    
    # Set up query parameters with the track IDs
    # Ensure track_ids is a comma-separated string
    params = {
       "ids": ",".join(track_ids)  # Convert list to comma-separated string
    }
    
    # Make the request to the Spotify API
    response = requests.get(url, headers=headers, params=params)
    
    if response.status_code != 200:
        raise Exception(f"Failed to fetch track data: {response.status_code}, {response.text}")
    
    # Parse the response JSON
    tracks_data = response.json().get("tracks", [])

    # Extract the image URLs for each track and store them in a list
    urls = []
    song_names = []
    for track in tracks_data:
        if track and "album" in track and "images" in track["album"] and track["album"]["images"]:
            urls.append(track["album"]["images"][0]["url"])  # Use the first image (highest resolution)
        else:
            urls.append(None)  # Append None if no image is found

        # Extract song names
        if track and "name" in track:
            song_names.append(track["name"])  # Use the track's name
        else:
            song_names.append(None)  # Append None if no name is found
    
    return urls, song_names



# Node class to store node information
class Node:
    def __init__(self, index, track_id, url):
        self.index = index
        self.track_id = track_id
        self.url = url
        self.song_name = None  # Add song_name attribute
        self.group = None

    def to_dict(self):
        return {
            "id": self.index,
            "track_id": self.track_id,
            "url": self.url,
            "song_name": self.song_name,  # Include song_name in the dictionary
            "group": self.group,
        }


# Move get_tracks outside the Node class and fix indentation
def get_tracks(query_type, query_value=None):
    if query_type == "random":
        tracks = Track.objects.order_by("?")[:50]  # Random 50 tracks
    elif query_type == "artist":
        tracks = Track.objects.filter(artist=query_value).order_by("?")[:50]  # 50 tracks from an artist
    elif query_type == "genre":
        tracks = Track.objects.filter(genre=query_value).order_by("?")[:50]  # 50 tracks from a genre
    else:
        return None, None

    track_ids = [track.track_id for track in tracks]  # Extract track IDs for all cases
    return tracks, track_ids
    

def generate_graph(request, query_type, query_value=None):
    tracks, track_ids = get_tracks(query_type, query_value)

    # If no tracks are found, return an empty response
    if not tracks or not track_ids:
        return JsonResponse({"error": "No tracks found"}, status=404)

    # Fetch URLs and song names for the tracks using Spotify API
    try:
        urls, song_names = get_track_image(track_ids)  # urls and song_names are now lists
    except Exception as e:
        return JsonResponse({"error": f"Failed to fetch track images: {str(e)}"}, status=500)

    # Feature selection
    features = ["acousticness", "danceability", "energy", "instrumentalness", "valence", "speechiness"]

    # Convert QuerySet to a list of dictionaries
    track_list = list(tracks.values("track_id", *features))

    # Convert to numpy array
    feature_matrix = np.array([[track[feat] for feat in features] for track in track_list])

    # Compute cosine similarity
    similarity_matrix = cosine_similarity(feature_matrix)

    # Threshold for adding edges
    threshold = 0.90

    # Create graph
    G = nx.Graph()
    nodes = {}

    # Add nodes with track_id, URL, and song name information
    for i, track in enumerate(track_list):
        # Get the URL and song name for the current track using the index
        track_url = urls[i]  # URLs are in the same order as track_list
        song_name = song_names[i]  # Song names are in the same order as track_list
        nodes[i] = Node(index=i, track_id=track["track_id"], url=track_url)
        nodes[i].song_name = song_name  # Add song name to the node
        G.add_node(i)  # Add node index to the graph

    # Add edges based on similarity threshold
    for i in range(len(track_list)):
        for j in range(i + 1, len(track_list)):
            if similarity_matrix[i, j] > threshold:
                G.add_edge(i, j, weight=similarity_matrix[i, j])

    # Remove unconnected nodes
    G.remove_nodes_from(list(nx.isolates(G)))

    # Apply Louvain Community Detection
    louvain_partition = community_louvain.best_partition(G)

    # Assign groups to nodes
    for node_idx, group in louvain_partition.items():
        nodes[node_idx].group = group

    # Convert the graph into a JSON format
    graph_data = {
        "nodes": [
            {
                "id": node.index,
                "track_id": node.track_id,
                "url": node.url,
                "song_name": node.song_name,  # Include song name
                "group": node.group,
            }
            for node in nodes.values() if node.index in G.nodes()
        ],
        "edges": [
            {
                "source": u,
                "target": v,
                "weight": d["weight"],
            }
            for u, v, d in G.edges(data=True)
        ],
    }

    return JsonResponse(graph_data, safe=False)
    

def list_genres(request):
    genres = Track.objects.values_list("genre", flat=True).distinct()
    return JsonResponse({"genres": list(genres)}, safe=False)


def list_artists(request):
    artists = Track.objects.values_list("artist", flat=True).distinct()
    return JsonResponse({"artists": list(artists)}, safe=False)