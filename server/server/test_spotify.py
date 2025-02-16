import requests
import base64


# Test function for Spotify API URL Grab (NOT REAL CODE!!)


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

def test_track_image():
    # Manually input a track ID
    track_id = input("Enter a Spotify Track ID: ")

    # Call the get_track_image logic
    access_token = get_token()

    if not access_token:
        print("Failed to retrieve access token.")
        return

    # Fetch track details from Spotify
    track_url = f'https://api.spotify.com/v1/tracks/{track_id}'
    headers = {
        'Authorization': f'Bearer {access_token}',
    }

    response = requests.get(track_url, headers=headers)
    if response.status_code != 200:
        print(f"Error: {response.status_code} - {response.text}")
        return

    track_data = response.json()

    # Extract image URL
    image_url = track_data['album']['images'][0]['url'] if track_data['album']['images'] else None

    if image_url:
        print(f"Image URL: {image_url}")
    else:
        print("No image found for this track.")

# Run the test function
if __name__ == "__main__":
    test_track_image()