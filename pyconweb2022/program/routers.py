from rest_framework.routers import DefaultRouter

from program.viewsets import ProposalViewSet, ProposalDetailViewSet


def get_router():
    router = DefaultRouter()
    router.register("list", ProposalViewSet, basename="program")
    router.register("edit", ProposalDetailViewSet, basename="program-edit")

    return router
