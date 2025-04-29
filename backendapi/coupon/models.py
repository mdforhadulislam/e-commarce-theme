from django.db import models


class Coupon(models.Model):
    code = models.CharField(max_length=50, unique=True)
    discount_percentage = models.DecimalField(max_digits=5, decimal_places=2)
    expiration_date = models.DateTimeField()
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"Coupon {self.code} - {self.discount_percentage}%"
