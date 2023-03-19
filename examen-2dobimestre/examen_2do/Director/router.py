from django.urls import path, include
from rest_framework import routers
from .views import DirectorViewSet

routerDirector = routers.DefaultRouter()
routerDirector.register('directores', DirectorViewSet)

urlpatterns = [
    path('', include(routerDirector.urls)),
]