from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    role = models.CharField(max_length=50, choices=[('admin', 'Admin'), ('modaretor', 'Modaretor'), ('seller', 'Seller') ,('user', 'User')], default='user')
    date_joined = models.DateTimeField(auto_now_add=True)
    is_verified = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    
    
    nid_font = models.ImageField(upload_to='nid/', blank=True, null=True)
    nid_back = models.ImageField(upload_to='nid/', blank=True, null=True)
    
    city = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=100, blank=True, null=True)
    country = models.CharField(max_length=100, blank=True, null=True)
    zip_code = models.CharField(max_length=10, blank=True, null=True)
    
    address = models.TextField(blank=True, null=True)
    last_login = models.DateTimeField(auto_now=True)
    
    
    

    def __str__(self):
        return self.username  # or any other field you want to represent the user by
    
    class Meta:
        unique_together = ('username', 'email')
        
    