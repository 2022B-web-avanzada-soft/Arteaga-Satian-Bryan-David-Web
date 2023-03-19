# Generated by Django 4.1.7 on 2023-03-19 18:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Director',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('nombre', models.CharField(max_length=50)),
                ('genero', models.CharField(max_length=50)),
                ('edad', models.IntegerField()),
                ('nacionalidad', models.CharField(max_length=50)),
            ],
        ),
    ]