from django.db import models

class Notification(models.Model):
    user = models.ForeignKey('user.User', on_delete=models.CASCADE, related_name='notifications')
    title = models.CharField(max_length=255)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)
    message_type = models.CharField(max_length=50, choices=[
        ('info', 'Info'),
        ('warning', 'Warning'),
        ('error', 'Error'),
        ('success', 'Success'),
    ], default='info')

    def __str__(self):
        return f"Notification: {self.title} - Read: {self.is_read}"
