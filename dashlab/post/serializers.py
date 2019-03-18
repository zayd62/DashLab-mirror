from rest_framework import serializers
from .models import SocialMediaPost, SocialMediaAccount

# Serializers convert from model to native python which can then be converted to JSON
# Each model has its own serializer
# not to sure what the Meta class does. feel free to research

class SocialMediaPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialMediaPost
        fields = '__all__'


class SocialMediaAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialMediaAccount
        fields = '__all__'
