from rest_framework.serializers import ModelSerializer

from sponsor.models import Sponsor


class SponsorSerializer(ModelSerializer):
    class Meta:
        model = Sponsor
        fields = "__all__"


class SponsorListSerializer(ModelSerializer):
    class Meta:
        model = Sponsor
        fields = ["slug", "name", "level", "desc", "url", "logo_image"]
