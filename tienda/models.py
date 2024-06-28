from django.db import models

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    categoria = models.CharField(max_length=32)
    descripcion = models.TextField(default="")
    imagen = models.ImageField(upload_to='productos/', default='media/default.png')
    precio = models.IntegerField()

    def __str__(self):
        return f'{self.nombre} -> {self.precio}'
