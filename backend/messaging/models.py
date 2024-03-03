from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Group(models.Model):
    name = models.CharField(max_length=100)
    members = models.ManyToManyField(User, related_name='member_groups')

class MessageTemplate(models.Model):
    subject = models.CharField(max_length=255)
    body = models.TextField()

class Message(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    recipient_group = models.ForeignKey(Group, on_delete=models.CASCADE)
    subject = models.CharField(max_length=255)
    body = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.sender} to {self.recipient_group}"
