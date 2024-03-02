from rest_framework import serializers
from accounts.models import UserProfile
from .models import Subject


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'
