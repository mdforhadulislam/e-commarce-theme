from django.shortcuts import render
from .models import *
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import *
from rest_framework.authtoken.views import ObtainAuthToken

class Accounts(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer



class AuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        checked_user = User.objects.filter(username=username)
        
        if not checked_user:
            return Response({"message": "User not found", "status": 404, "data": []}, status=200)
        
        # Correct super() usage
        response = super().post(request, *args, **kwargs)
        token = response.data.get('token')
        user = User.objects.get(username=username)
        serializer = UserSerializer(user)
        return Response({
            "message": "User data found",
            "status": 200,
            "data": serializer.data,
            "token": token
        }, status=200)