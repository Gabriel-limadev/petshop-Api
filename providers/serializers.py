from rest_framework import serializers
from .models import Provider

# Create your views here.

class ProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provider
        fields = '__all__'