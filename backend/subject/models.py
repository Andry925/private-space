from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Subject(models.Model):
    TEST = "Test"
    LABARATORY = "Labaratory"
    AVAILABLE_ROLES = (
        (TEST, "Test"),
        (LABARATORY, "Labaratory")
    )
    name = models.CharField(max_length=20)
    mark = models.PositiveIntegerField(default=0, validators=[
        MinValueValidator(0), MaxValueValidator(30)])
    task = models.CharField(max_length=30, blank=True, choices=AVAILABLE_ROLES)
    completed_tasks = models.IntegerField(default=0, blank=True)
    total_score_in_percentage = models.DecimalField(
        default=0, max_digits=5, decimal_places=2)

    def __str__(self):
        return f'{self.name}'


