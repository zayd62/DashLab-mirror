from rest_framework import routers
from .api import SocialMediaPostViewset

router = routers.DefaultRouter()
router.register('api/post', SocialMediaPostViewset, 'socialmediapost')

urlpatterns = router.urls
