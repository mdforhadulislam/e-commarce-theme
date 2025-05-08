from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100, unique=True)
    
    title1 = models.CharField(max_length=100, blank=True, null=True)
    description1 = models.TextField(blank=True, null=True)
    title2 = models.CharField(max_length=100, blank=True, null=True)
    description2 = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_discount = models.BooleanField(default=False)
    discount_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    stock = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_new = models.BooleanField(default=True)
    is_primium = models.BooleanField(default=False)
    is_featured = models.BooleanField(default=False)
    
    
    store = models.ForeignKey('store.Store', on_delete=models.CASCADE, related_name='store')
    category = models.ForeignKey('category.SubCategory', on_delete=models.CASCADE, related_name='subcategory',)
    image = models.ManyToManyField('ProductImage', blank=True, related_name='product_images')
    is_verified = models.BooleanField(default=False)
    reason = models.TextField(blank=True, null=True)
    

    def __str__(self):
        return self.name


class ProductImage(models.Model):
    name = models.CharField(max_length=100, unique=True)
    image = models.ImageField(upload_to='products/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.name} - product image"