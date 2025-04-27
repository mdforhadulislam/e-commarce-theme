from django.urls import re_path
from rest_framework import routers
from user_api.views import UserViewSet, CustomAuthToken
from django.conf.urls import include

# Create the router instance
router = routers.DefaultRouter()
router.register(r'user', UserViewSet, basename='user')

# Correct the urlpatterns to include the router.urls
urlpatterns = [
    re_path('', include(router.urls)),  # Directly include the router's urls
    re_path('auth/', CustomAuthToken.as_view()),  # Include DRF's auth urls for login/logout
]