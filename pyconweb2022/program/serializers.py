from rest_framework.serializers import ModelSerializer

from program.models import Proposal, ProgramCategory


# 홈페이지 출력용
class ProposalSerializer(ModelSerializer):
    class Meta:
        model = Proposal
        fields = [
            "user_name",
            "title",
            "brief",
            "desc",
            "difficulty",
            "duration",
            "language",
            "video_url",
            "slide_url",
            "video_open_at",
            "track_num",
        ]


# 작성자를 위한 모델 전체 기능
class ProposalDetailSerializer(ModelSerializer):
    class Meta:
        model = Proposal
        fields = "__all__"
