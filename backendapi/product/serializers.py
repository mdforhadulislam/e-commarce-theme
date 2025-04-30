from rest_framework import serializers
from .models import Product, ProductImage

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = '__all__'
        read_only_fields = ('id', 'created_at')

class ProductSerializer(serializers.ModelSerializer):
    image = ProductImageSerializer(many=True, read_only=True)
    image_ids = serializers.PrimaryKeyRelatedField(
        queryset=ProductImage.objects.all(), write_only=True, many=True, source='image'
    )

    class Meta:
        model = Product
        fields = [
            'id', 'name', 'title1', 'description1', 'title2', 'description2', 'price', 'stock',
            'created_at', 'updated_at', 'store', 'categories', 'image', 'image_ids',
            'is_verified', 'reason'
        ]
        read_only_fields = ('id', 'created_at')