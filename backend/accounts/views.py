from django.contrib.auth import login, logout
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from .serializers import UserSerializer, LoginSerializer, LoggedInUserSerializer


class UserRegisterView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        serializer = UserSerializer(
            data=request.data, context={
                'request': request})
        if serializer.is_valid(
                raise_exception=True) and not request.user.is_authenticated:
            user = serializer.create(request.data)
            if user:
                return Response(
                    serializer.data,
                    status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLoginView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication, )

    def post(self, request):
        data = request.data
        serializer = LoginSerializer(data=data)
        if serializer.is_valid(
                raise_exception=True) and not request.user.is_authenticated:
            user = serializer.login_user(data=data)
            login(request, user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"eror_message": "You are alreaydy loged in"},
                        status=status.HTTP_400_BAD_REQUEST)


class LoggedInUserView(APIView):
    permission_classes = (permissions.IsAuthenticated, )
    authentication_classes = (SessionAuthentication, )

    def get(self, request):
        current_user = request.user
        serializer = LoggedInUserSerializer(current_user)
        return Response({'user': serializer.data}, status=status.HTTP_200_OK)


class LogoutUserView(APIView):
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)
