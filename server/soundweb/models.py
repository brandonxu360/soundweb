from django.db import models

class Track(models.Model):
    track_id = models.CharField(max_length=50)
    artist = models.CharField(max_length=500)
    track_name = models.CharField(max_length=500)
    genre = models.CharField(max_length=100)
    
    # Track features
    acousticness = models.FloatField()
    danceability = models.FloatField()
    energy = models.FloatField()
    instrumentalness = models.FloatField()
    valence = models.FloatField()
    speechiness = models.FloatField()

    def __str__(self):
        return f"{self.track_name} by {self.artist}"
