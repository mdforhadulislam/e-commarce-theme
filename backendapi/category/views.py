from rest_framework import viewsets
from .models import Category
from .serializers import CategorySerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    

class SubCategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.sub_categories.through.objects.all()
    serializer_class = CategorySerializer