from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from providers.views import ProvidersList, ProvidersDetail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/providers/', ProvidersList.as_view()),
    path('api/providers/<int:pk>/', ProvidersDetail.as_view()),
]
