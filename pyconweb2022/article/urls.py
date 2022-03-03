from django.urls import path
from rest_framework import routers

from .viewsets import ArticleViewSet

router = routers.SimpleRouter()

router.register(
    r"",
    ArticleViewSet,
    basename="article"
)

urlpatterns = []

urlpatterns = urlpatterns + router.urls