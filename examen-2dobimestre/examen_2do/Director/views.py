from django.shortcuts import render
from rest_framework import viewsets
from .models import Director
from .serializer import DirectorSerializer

# Create your views here.


class DirectorViewSet(viewsets.ModelViewSet):
    queryset = Director.objects.all()
    serializer_class = DirectorSerializer
