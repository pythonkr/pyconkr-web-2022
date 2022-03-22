from rest_framework.viewsets import ModelViewSet

from pyconemailer.models import Mailing
from pyconemailer.serializers import MailingSerializer


class MailingViewSet(ModelViewSet):
    queryset = Mailing.objects.none()   # 개인정보 보호를 위해 조회기능 비활성화
    serializer_class = MailingSerializer

    def list(self, request, *args, **kwargs):
        # 개인정보 보호를 위해 전체 조회(list) 액션 비활성화
        queryset = Mailing.objects.none()
        serializer = MailingSerializer(queryset)
        return serializer.data

    def retrieve(self, request, *args, **kwargs):
        queryset = Mailing.objects.none()
        serializer = MailingSerializer(queryset)
        return serializer.data
