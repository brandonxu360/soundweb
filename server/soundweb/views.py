from django.shortcuts import render
import json
import numpy as np
import networkx as nx
import community.community_louvain as community_louvain  # Louvain community detection
from django.http import JsonResponse
from sklearn.metrics.pairwise import cosine_similarity
from .models import Track

# Node class to store node information
class Node:
    def __init__(self, index, track_id):
        self.index = index
        self.track_id = track_id
        self.group = None

    def to_dict(self):
        return {
            "id": self.index,
            "track_id": self.track_id,
            "group": self.group,
        }

def get_tracks(query_type, query_value=None):
    if query_type == "random":
        tracks = Track.objects.order_by("?")[:50]  # Random 50 tracks
    elif query_type == "artist":
        tracks = Track.objects.filter(artist=query_value).order_by("?")[:50]  # 50 tracks from an artist
    elif query_type == "genre":
        tracks = Track.objects.filter(genre=query_value).order_by("?")[:50]  # 50 tracks from a genre
    else:
        return None
    return tracks

def generate_graph(request, query_type, query_value=None):
    tracks = get_tracks(query_type, query_value)
    track_ids = [track['track_id'] for track in track_list]
    
    # If no tracks are found at all, return an empty response
    if not tracks.exists():
        return JsonResponse({"error": "No tracks found"}, status=404)

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

    # Add nodes with track_id information
    for i, track in enumerate(track_list):
        nodes[i] = Node(index=i, track_id=track["track_id"])
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
        "nodes": [node.to_dict() for node in nodes.values() if node.index in G.nodes()],
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

def get_song(request):
    return image_url, name