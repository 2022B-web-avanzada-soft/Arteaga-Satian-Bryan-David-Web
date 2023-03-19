from django.urls import path, include
from rest_framework import routers
from .views import PeliculaViewSet

routerPelicula = routers.DefaultRouter()
routerPelicula.register('peliculas', PeliculaViewSet)

urlpatterns = [
    path('', include(routerPelicula.urls)),
]
