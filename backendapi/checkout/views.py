from rest_framework import viewsets
from .models import Checkout
from .serializers import CheckoutSerializer

class CheckoutViewSet(viewsets.ModelViewSet):
    queryset = Checkout.objects.all()
    serializer_class = CheckoutSerializer