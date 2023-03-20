from django.db import models

# Create your models here.


class Director(models.Model):
    id = models.AutoField(primary_key=True, unique=True, null=False)
    nombre = models.CharField(max_length=50, null=False)
    genero = models.CharField(max_length=50, null=False)
    edad = models.IntegerField(null=False)
    retirado = models.BooleanField(default=False)
    nacionalidad = models.CharField(max_length=50, null=False)

    def __str__(self):
        return self.nombre
