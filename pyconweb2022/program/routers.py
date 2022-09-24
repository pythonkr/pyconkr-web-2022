from rest_framework.routers import DefaultRouter

from program.viewsets import (
    ProposalViewSet,
    ProposalDay1ViewSet,
    ProposalDay2ViewSet,
    ProposalDetailViewSet,
    CategorySessionViewSet,
)


def get_router():
    router = DefaultRouter()
    router.register("list/day1", ProposalDay1ViewSet, basename="program-day1")
    router.register("list/day2", ProposalDay2ViewSet, basename="program-day2")
    router.register("list", ProposalViewSet, basename="program")
    # router.register("edit", ProposalDetailViewSet, basename="program-edit")
    router.register("category", CategorySessionViewSet, basename="session-in-category")

    return router
