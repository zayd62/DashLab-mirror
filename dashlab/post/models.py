from django.db import models

class SocialMediaPost(models.Model):
    text_content = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)
