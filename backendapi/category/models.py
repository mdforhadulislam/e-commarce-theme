from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    sub_categories = models.ManyToManyField('SubCategory', related_name='subcategories', blank=True)
    category_image = models.ImageField(upload_to='category/', blank=True, null=True)

    def __str__(self):
        return self.name



class SubCategory(models.Model):
    name = models.CharField(max_length=100, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    category = models.ForeignKey(Category, related_name='subcategories', on_delete=models.CASCADE)
    products = models.ManyToManyField('product.Product', related_name='products', blank=True)
    subcategory_image = models.ImageField(upload_to='subcategory/', blank=True, null=True)

    def __str__(self):
        return self.name