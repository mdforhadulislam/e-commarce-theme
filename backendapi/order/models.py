from django.db import models


class Order(models.Model):
    user = models.ForeignKey('user.User', on_delete=models.CASCADE, related_name='orders')
    product = models.ForeignKey('product.Product', on_delete=models.CASCADE, related_name='orders')
    quantity = models.PositiveIntegerField(default=1)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    order_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=50, choices=[
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('shipped', 'Shipped'),
        ('delivered', 'Delivered'),
        ('cancelled', 'Cancelled')
    ], default='pending')
    
    def __str__(self):
        return f"Order {self.id} by {self.user.username} for {self.product.name}"