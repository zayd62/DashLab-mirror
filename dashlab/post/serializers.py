from rest_framework import serializers
from post.models import SocialMediaPost

# Post serializer

class SocialMediaPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialMediaPost
        fields = '__all__'
