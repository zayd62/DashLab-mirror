from django.db import models
from django.contrib.auth.models import AbstractUser
from post.models import SocialMediaPost

## Defining our own user using the AbstractUser for custom authentication
class SysUser(AbstractUser):
    is_mediaManager = models.BooleanField(default=False)
    is_administrator = models.BooleanField(default=False)

## Media Manager is a type of SysUser (defined above)
## Has posts that they have made tied to their instance
class MediaManager(models.Model):
    user = models.OneToOneField(SysUser, on_delete=models.CASCADE, primary_key=True)
    posts = models.ForeignKey (
        SocialMediaPost, related_name="posts", on_delete=models.CASCADE, null=True
    )

class SysAdmin(models.Model):
    pass
