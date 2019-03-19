from rest_framework import routers
from .views import *

# this is used to create the urls for the api
# each viewset needs its own endpoint
router = routers.DefaultRouter()
router.register('api/post', SocialMediaPostViewset, 'socialmediapost')
router.register('api/socialmediaaccount', SocialMediaAccountViewset, 'socialmediaaccount')

urlpatterns = router.urls
