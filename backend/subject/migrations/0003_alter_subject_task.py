# Generated by Django 5.0.2 on 2024-03-02 23:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('subject', '0002_alter_subject_mark'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subject',
            name='task',
            field=models.CharField(blank=True, choices=[('Test', 'Test'), ('Labaratory', 'Labaratory')], max_length=30),
        ),
    ]