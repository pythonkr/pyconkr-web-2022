from django.shortcuts import get_object_or_404
from django.core.exceptions import PermissionDenied

from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from rest_framework.response import Response

from sponsor.serializers import (
    SponsorSerializer,
    SponsorListSerializer,
    PersonalSponsorshipSerializer,
)
from sponsor.models import Sponsor, PersonalSponsorship


class SponsorViewSet(ReadOnlyModelViewSet):
    serializer_class = SponsorSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]  # 로그인된 사용자에게만 허용

    def get_queryset(self):
        return Sponsor.objects.all()

    def list(self, request, *args, **kwargs):
        queryset = Sponsor.objects.filter(accepted=True).order_by(
            "name"
        )  # 모든 절차가 완료된 후원사만 리스팅
        serializer = SponsorListSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, *args, **kwargs):
        pk = kwargs["pk"]
        sponsor_data = get_object_or_404(Sponsor, pk=pk)

        serializer = SponsorSerializer(sponsor_data)
        return Response(serializer.data)


class PersonalSponsorshipViewSet(ReadOnlyModelViewSet):
    serializer_class = PersonalSponsorshipSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return PersonalSponsorship.objects.all().order_by("?")
