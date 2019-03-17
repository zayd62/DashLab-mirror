from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from post.models import SocialMediaPost

def UserManager(BaseUserManager):
    def create_user(self, email, password=None, is_mediaManager=False, is_administrator=False):
        if not email:
            raise ValueError("Users must have an email address")
        if not password:
            raise ValueError("Users must have a password")    
        user_obj = self.model (
            email = self.normalize_email(email)
        )

        user_obj.set_password(password)
        user_obj.mediaManager = is_mediaManager
        user_obj.administrator = is_administrator
        user_obj.save(using=self._db)
        return user_obj
    
    def create_mediaManager(self, email, password=None):
        user = self.create_user (
            email,
            password = password,
            is_mediaManager = True
        )
        return user

    def create_administrator(self, email, password=None):
        user = self.create_user (
            email,
            password = password,
            is_administrator = True
        )
        return user

## Defining our own user using the AbstractBaseUser for custom authentication
class User(AbstractBaseUser):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255, blank=False, null=False)
    last_name = models.CharField(max_length=255, blank=False, null=False)
    mediaManager = models.BooleanField(default=False)
    administrator = models.BooleanField(default=False)

    # objects = UserManager()

    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.email

    def get_first_name(self):
        return self.first_name

    def get_last_name(self):
        return self.last_name

    @property
    def is_mediaManager(self):
        return self.mediaManager

    @property
    def is_administrator(self):
        return self.administrator

# class Profile(models.Model):
#     user = models.OneToOneField(User)

## Media Manager is a type of SysUser (defined above)
## Has posts that they have made tied to their instance
class MediaManager(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    posts = models.ForeignKey (
        SocialMediaPost, related_name="posts", on_delete=models.CASCADE, null=True
    )

class SysAdmin(models.Model):
    pass
