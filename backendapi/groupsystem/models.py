from django.db import models

class GroupsForStor(models.Model):
    group_name = models.CharField(max_length=255)
    group_description = models.TextField()
    group_type = models.CharField(max_length=50, choices=[('public', 'Public'), ('private', 'Private')])
    group_members = models.ManyToManyField('user.User', related_name='group_memberships', blank=True)
    group_admin = models.ForeignKey('user.User', related_name='group_admins', on_delete=models.CASCADE)
    group_image = models.ImageField(upload_to='group_images/', blank=True, null=True)   
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.group_name} ({self.group_type}) - Admin {self.group_admin.username}'


class GroupImage(models.Model):
    image = models.ImageField(upload_to='group_images/', blank=True, null=True)
    title = models.CharField(max_length=255, blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Image for {self.group.group_name}'


class GroupComment(models.Model):
    user = models.ForeignKey('user.User', related_name='group_comments', on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Comment by {self.user.username} in {self.group.group_name}'
     

class GroupPost(models.Model):
    group = models.ForeignKey(GroupsForStor, related_name='posts', on_delete=models.CASCADE)
    user = models.ForeignKey('user.User', related_name='group_posts', on_delete=models.CASCADE)
    content = models.TextField()
    group_image = models.ForeignKey(GroupImage, related_name='group_posts', on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    likes = models.ManyToManyField('user.User', related_name='liked_posts', blank=True)
    comments = models.ManyToManyField(GroupComment, related_name='post_comments', blank=True)
    is_approved = models.BooleanField(default=False)
    

    def __str__(self):
        return f'Post by {self.user.username} in {self.group.group_name}'
    

