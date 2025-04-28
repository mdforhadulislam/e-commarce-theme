from django.db import models


class Checkout(models.Model):
    user = models.ForeignKey('user_api.CustomUser', on_delete=models.CASCADE, related_name='checkouts')

    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    checkout_date = models.DateTimeField(auto_now_add=True)
    
    shipping_city = models.CharField(max_length=100, blank=True, null=True)
    shipping_state = models.CharField(max_length=100, blank=True, null=True)
    shipping_country = models.CharField(max_length=100, blank=True, null=True)
    shipping_zip_code = models.CharField(max_length=10, blank=True, null=True)
    
    shipping_address = models.TextField(blank=True, null=True)
    
    

    def __str__(self):
        return f"Checkout {self.id} by {self.user.username} "
