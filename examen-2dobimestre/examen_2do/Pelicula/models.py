from django.db import models

# Create your models here.


class Pelicula(models.Model):
    id = models.AutoField(primary_key=True, unique=True, null=False)
    titulo = models.CharField(max_length=50, null=False)
    anioLanzamiento = models.CharField(max_length=50, null=False)
    genero = models.CharField(max_length=50, null=False)
    duracion = models.IntegerField(null=False)
    director = models.ForeignKey('Director.Director', on_delete=models.CASCADE)

    def __str__(self):
        return self.titulo
