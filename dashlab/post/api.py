from rest_framework import viewsets, permissions
from post.models import SocialMediaPost
from .serializers import SocialMediaPostSerializer

# Post viewset
class SocialMediaPostViewset(viewsets.ModelViewSet):
    queryset = SocialMediaPost.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = SocialMediaPostSerializer