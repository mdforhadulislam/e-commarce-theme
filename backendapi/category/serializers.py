from rest_framework import serializers
from .models import Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
        read_only_fields = ['created_at']
        

class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category.sub_categories.through
        fields = '__all__'
        read_only_fields = ['created_at']