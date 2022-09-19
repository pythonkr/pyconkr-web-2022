from rest_framework import serializers

from program.models import Proposal, ProgramCategory


# 홈페이지 출력용
class ProposalSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(
        many=False, read_only=True, slug_field="name"
    )

    difficulty = serializers.SerializerMethodField()
    language = serializers.SerializerMethodField()

    class Meta:
        model = Proposal
        fields = [
            "user_name",
            "title",
            "brief",
            "desc",
            "eng_desc",
            "difficulty",
            "duration",
            "language",
            "video_url",
            "slide_url",
            "video_open_at",
            "track_num",
            "introduction",
            "category",
            "speaker_profile_img",
            "id",
        ]

    def get_difficulty(self, obj: Proposal):
        if obj.difficulty == "B":
            return "초급"

        if obj.difficulty == "I":
            return "중급"

        if obj.difficulty == "E":
            return "고급"

    def get_language(self, obj: Proposal):
        if obj.language == "":
            return ""

        if obj.language == "K":
            return "ko"

        if obj.language == "E":
            return "en"


# 작성자를 위한 모델 전체 기능
class ProposalDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proposal
        fields = "__all__"
