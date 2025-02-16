import csv
import os
import django

from your_app.models import Track

# Define file path
csv_file = os.path.join(os.path.dirname(__file__), "dataset.csv")

def load():
    with open(csv_file, newline='', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            # Create Track entry
            Track.objects.get_or_create(
                track_id=row["track_id"],
                artist=row["artists"],
                track_name=row["track_name"],
                genre=row["track_genre"],
                acousticness=float(row["acousticness"]),
                danceability=float(row["danceability"]),
                energy=float(row["energy"]),
                instrumentalness=float(row["instrumentalness"]),
                valence=float(row["valence"]),
                speechiness=float(row["speechiness"]),
            )