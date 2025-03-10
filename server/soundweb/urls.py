"""
URL configuration for server project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from .views import generate_graph, list_genres, list_artists

urlpatterns = [
    path("graph/random/", generate_graph, {"query_type": "random"}),
    path("graph/artist/<str:query_value>/", generate_graph, {"query_type": "artist"}),
    path("graph/genre/<str:query_value>/", generate_graph, {"query_type": "genre"}),
    path("genres/", list_genres, name="list_genres"),
    path("artists/", list_artists, name="list_artists"),
    # place holder for song details
]

