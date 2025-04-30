from rest_framework import serializers
from .models import Store
from user.models import User  # Adjust the import based on the actual location of the User model

class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = '__all__'
        read_only_fields = ('id','created_at')