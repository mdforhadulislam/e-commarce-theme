from rest_framework import serializers
from .models import GroupsForStor, GroupPost, GroupComment, GroupImage
from user.models import User  # Adjust if the user model is custom

class GroupImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupImage
        fields = '__all__'

class GroupCommentSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = GroupComment
        fields = '__all__'

class GroupPostSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    group = serializers.PrimaryKeyRelatedField(queryset=GroupsForStor.objects.all())
    group_image = GroupImageSerializer(read_only=True)
    comments = GroupCommentSerializer(many=True, read_only=True)
    likes = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), many=True)

    class Meta:
        model = GroupPost
        fields = '__all__'

class GroupsForStorSerializer(serializers.ModelSerializer):
    group_admin = serializers.StringRelatedField(read_only=True)
    group_members = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), many=True)

    class Meta:
        model = GroupsForStor
        fields = '__all__'