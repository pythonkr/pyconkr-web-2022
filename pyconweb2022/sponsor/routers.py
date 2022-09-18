from rest_framework.routers import DefaultRouter

from sponsor.viewsets import *


def get_router():
    router = DefaultRouter()
    router.register(
        "personal", PersonalSponsorshipViewSet, basename="personal_sponsorship"
    )
    router.register("", SponsorViewSet, basename="sponsor")

    return router
