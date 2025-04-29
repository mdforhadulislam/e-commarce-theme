from django.db import models


class GiftCard(models.Model):
    code = models.CharField(max_length=50, unique=True)
    balance = models.DecimalField(max_digits=10, decimal_places=2)
    expiration_date = models.DateTimeField()
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"GiftCard {self.code} - Balance: {self.balance}"