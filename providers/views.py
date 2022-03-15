from rest_framework.views import APIView
from django.http import Http404
from rest_framework.response import Response
from rest_framework import status
from .serializers import ProviderSerializer
from .models import Provider

class ProvidersList(APIView):
    """Showing all providers"""
    def get(self, request, format=None):
        providers = Provider.objects.all()
        serializer = ProviderSerializer(providers, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = ProviderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)        

class ProvidersDetail(APIView):
    """
    Retrieve, update or delete a provider instance.
    """
    def get_object(self, pk):
        try:
            return Provider.objects.get(pk=pk)
        except Provider.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        provider = self.get_object(pk)
        serializer = ProviderSerializer(provider)
        return Response(serializer.data)


    def put(self, request, pk, format=None):
        provider = self.get_object(pk)
        serializer = ProviderSerializer(provider, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        provider = self.get_object(pk)
        provider.delete()
        return Response({'message' : 'Provider successfully deleted'}, status=status.HTTP_204_NO_CONTENT)