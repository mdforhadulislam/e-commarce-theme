from django.db import models


class Shipping(models.Model):
    checkout_order = models.ForeignKey('checkout.Checkout', on_delete=models.CASCADE, related_name='shipping')
    hand_over_courier_name = models.CharField(max_length=255, null=True, blank=True)
    hand_over_courier_tracking = models.CharField(max_length=255, null=True, blank=True)
    hand_over_courier_date = models.DateTimeField(null=True, blank=True)
    hand_over_courier_status =  models.CharField(max_length=50, choices=[
        ('pending', 'Pending'),
        ('transit', 'transit'),
        ('delivered', 'Delivered'),
        ('cancelled', 'Cancelled')
    ], default='pending')
    
    def __str__(self): 
        return f"Shipping {self.id} for Checkout {self.checkout_order.id}"
