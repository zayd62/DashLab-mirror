from django.db import models
from django.conf import settings

# Models determine how the data is stored in the database. Each class is a different model

class Profile(models.Model):
    userid = models.IntegerField(help_text='need to obtain manually')
    is_dashlab_admin = models.BooleanField(default=False)

    def __str__(self):
        return str(self.userid)

class SocialMediaAccount(models.Model):
    # a choice means that only a certain value can be qused
    # prevents a 'facebook' and 'Facebook' being in the database
    # https://docs.djangoproject.com/en/2.1/ref/models/fields/#choices
    PLATFORM_CHOICES = (('facebook', 'Facebook Account'),
                        ('twitter', 'Twitter Account'))
    name = models.CharField(max_length=100)
    platform = models.CharField(max_length=50, choices=PLATFORM_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    # string representation
    def __str__(self):
        return self.name + " - " + self.platform


class SocialMediaPost(models.Model):
    text_content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    # This relationship means that a post can have many social media accounts
    account = models.ManyToManyField(SocialMediaAccount)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, blank=True, null=True)