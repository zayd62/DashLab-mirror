from djoser.serializers import UserSerializer
from rest_framework import serializers
from .models import SocialMediaAccount, SocialMediaPost, Profile

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

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__' 