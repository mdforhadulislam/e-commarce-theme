from rest_framework import viewsets
from .models import GiftCard
from .serializers import GiftCardSerializer

class GiftCardViewSet(viewsets.ModelViewSet):
    queryset = GiftCard.objects.all()
    serializer_class = GiftCardSerializer