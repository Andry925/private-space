from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Message, MessageTemplate, Group
from .serializers import MessageSerializer, MessageTemplateSerializer, GroupSerializer
from django.core.mail import send_mail

class SendMessageView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            message = serializer.save()

            send_mail(
                message.subject,
                message.body,
                'soncikp00@gmail.com',
                [user.email for user in message.recipient_group.members.all()],
                fail_silently=False,
            )

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
