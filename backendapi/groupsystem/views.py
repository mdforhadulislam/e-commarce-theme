from rest_framework import viewsets, permissions
from .models import GroupsForStor, GroupPost, GroupComment, GroupImage
from .serializers import (
    GroupsForStorSerializer,
    GroupPostSerializer,
    GroupCommentSerializer,
    GroupImageSerializer
)

class GroupsForStorViewSet(viewsets.ModelViewSet):
    queryset = GroupsForStor.objects.all()
    serializer_class = GroupsForStorSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(group_admin=self.request.user)

class GroupPostViewSet(viewsets.ModelViewSet):
    queryset = GroupPost.objects.all()
    serializer_class = GroupPostSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class GroupCommentViewSet(viewsets.ModelViewSet):
    queryset = GroupComment.objects.all()
    serializer_class = GroupCommentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class GroupImageViewSet(viewsets.ModelViewSet):
    queryset = GroupImage.objects.all()
    serializer_class = GroupImageSerializer
    permission_classes = [permissions.IsAuthenticated]