from django.contrib import admin
from .models import SocialMediaAccount, SocialMediaPost, Profile

# Register your models here.
admin.site.register(SocialMediaAccount)
admin.site.register(SocialMediaPost)
admin.site.register(Profile)
# admin.site.register("www.google.com")


