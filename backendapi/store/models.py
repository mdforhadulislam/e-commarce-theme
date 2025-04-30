from django.db import models

class Store(models.Model):
    
    store_name = models.CharField(max_length=255, unique=True)
    owner_name = models.ForeignKey('user.User', on_delete=models.CASCADE, related_name='stores')
    store_type = models.CharField(max_length=255, choices=[
        ('retail', 'Retail'),
        ('wholesale', 'Wholesale'),
        ('online', 'Online'),
        ('service', 'Service')
    ])
    store_description = models.TextField()
    store_logo = models.ImageField(upload_to='store_logos/', null=True, blank=True)
    store_banner = models.ImageField(upload_to='store_banners/', null=True, blank=True)
    phone_number = models.CharField(max_length=15, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    is_verified = models.BooleanField(default=False)
    
    def __str__(self):
        return f'{self.store_name} and owner {self.owner_name.username} and type {self.store_type}'
