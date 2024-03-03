from rest_framework import serializers
from accounts.models import UserProfile
from .models import Subject


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject  # Set the model attribute to your Subject model
        fields = '__all__'  # You can adjust this based on the fields you want to include in the serialization