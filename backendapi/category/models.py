from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    producats = models.ManyToManyField('product.Product', related_name='products', blank=True)
    category_image = models.ImageField(upload_to='category/', blank=True, null=True)

    def __str__(self):
        return self.name
