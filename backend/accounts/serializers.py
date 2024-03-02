from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from django.core.exceptions import ValidationError
from . models import UserProfile

UserCustomModel = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCustomModel
        fields = '__all__'

    def validate(self, validated_data):
        email = validated_data.get("email")
        password = validated_data.get("password")
        if len(password) < 5 or len(email) < 7:
            raise ValidationError(
                "Either password or username is too short"
            )
        return validated_data

    def create(self, validated_data):
        user_instance = UserCustomModel.objects.create_user(**validated_data)
        user_instance.first_name = validated_data.get('first_name')
        UserProfile.objects.create(
            user=user_instance,
            profile_role=user_instance.role)
        user_instance.save()
        return user_instance


class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    class Meta:
        model = UserCustomModel
        fields = ("email", "password")

    def login_user(self, data):
        email = data.get('email')
        password = data.get('password')
        user = authenticate(email=email, password=password)
        if not user:
            raise ValidationError("Such user does not exist")
        return user


class LoggedInUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCustomModel
        fields = ("email", "username", "created_at", "updated_at")
