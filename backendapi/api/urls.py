from django.urls import path, re_path
from django.conf.urls import include
from rest_framework import routers
from user.views import *



router = routers.DefaultRouter()
router.register(r'user', Accounts, basename='user-accounts')


urlpatterns = [
    re_path(r'^', include(router.urls)),
    path('auth-token/', AuthToken.as_view(), name='auth-token'),
] 