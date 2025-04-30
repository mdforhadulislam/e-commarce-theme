from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','profile_picture', 'username', 'email','phone_number' ,'password', 'first_name', 'last_name'  ,'bio' ,'address' ,'city' ,'state','country' ,'zip_code' ,'date_of_birth','date_joined', 'is_staff', 'is_superuser','is_verified',  'is_active','last_login','role')
        read_only_fields = ('id', 'date_joined', 'last_login')
        extra_kwargs = {
            'password': {'write_only': True},
            'date_joined': {'read_only': True},
            'last_login': {'read_only': True},
            'profile_picture': {'required': False},
            'bio': {'required': False},
            'date_of_birth': {'required': False},
            'address': {'required': False},
            'city': {'required': False},
            'state': {'required': False},
            'country': {'required': False},
            'zip_code': {'required': False},
            
        }
        depth = 1
    
    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''),
            phone_number=validated_data.get('phone_number', ''),
            role=validated_data.get('role', 'user'),
        )
        user.set_password(validated_data['password'])
        user.save()
        return user