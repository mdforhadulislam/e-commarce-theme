from rest_framework import serializers
from .models import Review
from order.models import Order  # Adjust import based on the actual location of the Order model

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'
        read_only_fields = ('id', 'review_date')