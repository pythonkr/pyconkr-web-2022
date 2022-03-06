from rest_framework.viewsets import ReadOnlyModelViewSet, ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from program.models import Proposal
from program.serializers import ProposalSerializer, ProposalDetailSerializer


class ProposalViewSet(ReadOnlyModelViewSet):
    queryset = Proposal.objects.all()
    serializer_class = ProposalSerializer


class ProposalDetailViewSet(ModelViewSet):
    queryset = Proposal.objects.none()      # 각 Viewset 메서드에서 쿼리셋 작성
    serializer_class = ProposalDetailSerializer
    permission_classes = [IsAuthenticated]      # TODO: DjangoModelPermission 적용

    def retrieve(self, request, *args, **kwargs):
        queryset = Proposal.objects.get(user=request.user)

        serializer = self.get_serializer(queryset, many=False)
        return Response(serializer.data)
