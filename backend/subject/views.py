from rest_framework.views import APIView
from accounts.models import UserProfile
from rest_framework.authentication import SessionAuthentication
from rest_framework import permissions, status
from rest_framework.response import Response
from .serializers import UserProfileSerializer
from accounts.models import UserProfile


class ViewAllProfilesView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def get(self, request):
        profile_role = request.query_params.get('profile_role', None)

        if request.user.role == "Teacher" and profile_role == "Student":
            students_profiles = self.filter_by_role(profile_role=profile_role)
            profiles = UserProfileSerializer(students_profiles, many=True)
            return Response(profiles.data)
        elif request.user.role == "Teacher" and profile_role == "Teacher":
            teachers_profiles = self.filter_by_role(profile_role=profile_role)
            profiles = UserProfileSerializer(teachers_profiles, many=True)
            return Response(profiles.data)

        elif request.user.role == "Teacher" and not profile_role:
            all_profiles = UserProfile.objects.all()
            profiles = UserProfileSerializer(all_profiles, many=True)
            return Response(profiles.data)

        return Response({"message": "You are not allowed to view this page"},
                        status=status.HTTP_403_FORBIDDEN)

    def filter_by_role(self, profile_role):
        all_students_profiles = UserProfile.objects.filter(profile_role=profile_role)
        return all_students_profiles


class EditStudentProfileView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def get(self, request, pk):
        if request.user.role == "Teacher":
            profile = UserProfile.objects.get(pk=pk)
            serializer = UserProfileSerializer(profile)
            return Response(serializer.data)
        return Response({"message": "You can not view this page"},
                        status=status.HTTP_403_FORBIDDEN)

    def put(self, request, pk):
        profile = UserProfile.objects.get(pk=pk)
        serializer = UserProfileSerializer(profile, data=request.data)
        if serializer.is_valid(raise_exception=True) and request.user.role == "Teacher":
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_403_FORBIDDEN)








