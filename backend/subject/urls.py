from django.urls import path
from . import views


urlpatterns = [
    path("all_profiles/", views.ViewAllProfilesView.as_view(), name="all_profiles"),
    path("single_profile/<int:pk>/", views.EditStudentProfileView.as_view(), name="single_profile"),
    path("edit/<int:pk>/", views.EditStudentProfileView.as_view(), name="edit_profile"),
]