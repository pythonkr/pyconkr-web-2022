from rest_framework.viewsets import ReadOnlyModelViewSet, ViewSet
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from program.models import Proposal, ProgramCategory
from program.serializers import ProposalSerializer, ProposalDetailSerializer
from pyconweb2022 import config


class ProposalViewSet(ReadOnlyModelViewSet):
    queryset = Proposal.objects.all().order_by("track_num").order_by("video_open_at")
    serializer_class = ProposalSerializer
    permission_classes = [AllowAny]


class ProposalDay1ViewSet(ProposalViewSet):
    queryset = ProposalViewSet.queryset.filter(
        video_open_at__day=config.PYCON_KR_2022_DAY1
    )


class ProposalDay2ViewSet(ProposalViewSet):
    queryset = ProposalViewSet.queryset.filter(
        video_open_at__day=config.PYCON_KR_2022_DAY2
    )


class ProposalDetailViewSet(ReadOnlyModelViewSet):
    queryset = Proposal.objects.none()  # 각 Viewset 메서드에서 쿼리셋 작성
    serializer_class = ProposalDetailSerializer
    permission_classes = [IsAuthenticated]  # TODO: DjangoModelPermission 적용

    def retrieve(self, request, *args, **kwargs):
        queryset = Proposal.objects.get(user=request.user)

        serializer = self.get_serializer(queryset, many=False)
        return Response(serializer.data)


class CategorySessionViewSet(ProposalViewSet):
    queryset = Proposal.objects.none()

    def retrieve(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)

        return Response(serializer.data)

    def get_queryset(self):
        pk = self.kwargs.get("pk")
        target_category = ProgramCategory.objects.get(id=pk)
        sessions = Proposal.objects.filter(category=target_category).order_by(
            "video_open_at"
        )

        return sessions
