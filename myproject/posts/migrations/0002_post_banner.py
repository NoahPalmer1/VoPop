# Generated by Django 5.0.7 on 2024-07-16 02:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("posts", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="post",
            name="banner",
            field=models.ImageField(blank=True, default="fallback.png", upload_to=""),
        ),
    ]
