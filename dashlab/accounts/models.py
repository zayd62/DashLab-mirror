from django.db import models
from django.contrib.auth.models import AbstractBaseUser

class User(AbstractBaseUser):
    is_mediaManager = models.BooleanField(default=False)
    is_administrator = models.BooleanField(default=False)

class MediaManager(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)