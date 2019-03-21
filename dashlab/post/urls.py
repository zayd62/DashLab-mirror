from rest_framework import routers
from .apiviews import SocialMediaAccountViewset, SocialMediaPostViewset, ProfileViewset

# this is used to create the urls for the api
# each viewset needs its own endpoint
router = routers.DefaultRouter()
router.register(r'post', SocialMediaPostViewset, 'socialmediapost')
router.register(r'socialmediaaccount', SocialMediaAccountViewset, 'socialmediaaccount')
router.register(r'profile', ProfileViewset, 'profile')
urlpatterns = router.urls
