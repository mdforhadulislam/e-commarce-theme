from rest_framework import serializers
from .models import Shipping
from checkout.models import Checkout  # Adjust the import based on the actual location of the Checkout model

class ShippingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shipping
        fields = '__all__'
        read_only_fields = ('id')