# Generated by Django 4.1.7 on 2023-03-19 21:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Director', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='director',
            name='retirado',
            field=models.BooleanField(default=False),
        ),
    ]