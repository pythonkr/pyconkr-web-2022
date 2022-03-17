from django.urls import path
from rest_framework import routers

from .viewsets import NewsViewSet

router = routers.SimpleRouter()

router.register(r"", NewsViewSet, basename="news")

urlpatterns = []

urlpatterns = urlpatterns + router.urls
