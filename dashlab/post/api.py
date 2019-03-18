from rest_framework import viewsets, permissions
from .models import SocialMediaPost, SocialMediaAccount
from .serializers import SocialMediaPostSerializer, SocialMediaAccountSerializer

# django-rest views determine the HTTP request types such as GET, POST, DELETE and PATCH
# Not to sure what viewsets do but as far as i can tell, they are django-rest views but does all the work
# each model has its own viewset
# vscode will give you an error about **Class 'SocialMediaPost' has no 'objects' member**
# but i followed the django-rest tutorial and this is how they do it
# each model and its serializer has its own viewset


class SocialMediaPostViewset(viewsets.ModelViewSet):
    queryset = SocialMediaPost.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = SocialMediaPostSerializer


class SocialMediaAccountViewset(viewsets.ModelViewSet):
    queryset = SocialMediaAccount.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = SocialMediaAccountSerializer

# from rest_framework.generics import ListAPIView
# from .models import SocialMediaPost, SocialMediaAccount

# class PostListAPIView(ListAPIView):
#     queryset = Post.objects.all()