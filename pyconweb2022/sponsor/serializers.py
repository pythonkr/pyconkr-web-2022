from rest_framework.serializers import ModelSerializer

from sponsor.models import Sponsor, PersonalSponsorship


class SponsorSerializer(ModelSerializer):
    class Meta:
        model = Sponsor
        fields = "__all__"


class SponsorListSerializer(ModelSerializer):
    class Meta:
        model = Sponsor
        fields = [
            "slug",
            "name",
            "level",
            "desc",
            "eng_desc",
            "url",
            "logo_image",
            "id",
        ]


class PersonalSponsorshipSerializer(ModelSerializer):
    class Meta:
        model = PersonalSponsorship
        fields = ["name", "message"]
