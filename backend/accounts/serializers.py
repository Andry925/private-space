from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError

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
        user_instance.save()
        return user_instance
