from rest_framework.routers import DefaultRouter

from content.viewsets import ContentViewSet


def get_router():
    router = DefaultRouter()
    router.register("", ContentViewSet, basename="content")

    return router
