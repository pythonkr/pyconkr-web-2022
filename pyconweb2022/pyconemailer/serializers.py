from rest_framework.serializers import ModelSerializer

from pyconemailer.models import Mailing


class MailingSerializer(ModelSerializer):
    class Meta:
        model = Mailing
        fields = [
            "category",
            "email",
        ]
