from rest_framework.routers import DefaultRouter

from pyconemailer.viewsets import MailingViewSet


def get_router():
    router = DefaultRouter()
    router.register("", MailingViewSet, basename="program-edit")

    return router
