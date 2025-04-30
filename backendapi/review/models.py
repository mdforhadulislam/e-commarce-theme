from django.db import models

class Review(models.Model):
    checkout_order = models.ForeignKey('order.order', on_delete=models.CASCADE, related_name='reviews')
    ratting = models.PositiveIntegerField(default=1, choices=[
        (1, '1 Star'),
        (2, '2 Stars'),
        (3, '3 Stars'),
        (4, '4 Stars'),
        (5, '5 Stars')
    ])
    review_text = models.TextField(blank=True, null=True)
    review_date = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_approved = models.BooleanField(default=False)
    

    def __str__(self): 
        return f"Review {self.id} for Checkout {self.checkout_order.id}"