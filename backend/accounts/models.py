from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.core.validators import MaxValueValidator, MinValueValidator


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('email can not be empty')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)
        if not (extra_fields.get('is_staff')
                and extra_fields.get('is_superuser')):
            raise ValueError(
                'Superuser must have both is_staff and is_superuser equal True')
        return self.create_user(email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    STUDENT = "Student"
    TEACHER = "Teacher"
    AVAILABLE_ROLES = (
        (STUDENT, "Student"),
        (TEACHER, "Teacher")
    )
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    role = models.CharField(max_length=20, choices=AVAILABLE_ROLES)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    objects = UserManager()

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class UserProfile(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="profile")
    group = models.CharField(max_length=6, blank=True)
    faculty = models.IntegerField(default=1,
                                  validators=[
                                      MaxValueValidator(6),
                                      MinValueValidator(1)
                                  ], blank=True)
    profile_role = models.CharField(
        max_length=20,
        default=None,
        blank=True,
        null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.profile_role}'
