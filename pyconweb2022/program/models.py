from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class ProgramCategory(models.Model):
    name = models.CharField(max_length=100, db_index=True)
    slug = models.SlugField(max_length=100, unique=True)
    visible = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Proposal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    user_name = models.CharField(max_length=100, default="")
    title = models.CharField(max_length=255)
    brief = models.TextField(max_length=1000)
    desc = models.TextField(max_length=4000)
    comment = models.TextField(max_length=4000, null=True, blank=True)

    # TODO: 다국어 기능 추가
    difficulty = models.CharField(
        max_length=1,
        choices=(
            ("B", "초급"),
            ("I", "중급"),
            ("E", "고급"),
        ),
    )

    # TODO: 다국어 기능 추가
    # TODO: 추후에 러닝타임은 추가/변경될 수 있음
    duration = models.CharField(
        max_length=1,
        choices=(
            ("S", "15min"),
            ("L", "30min"),
        ),
    )

    # TODO: 다국어 기능 추가
    language = models.CharField(
        max_length=1,
        choices=(
            ("", "---------"),
            ("K", "한글"),
            ("E", "영어"),
        ),
        default="",
    )

    category = models.ForeignKey(
        ProgramCategory, on_delete=models.SET_DEFAULT, null=True, blank=True, default=14
    )
    accepted = models.BooleanField(default=False)
    introduction = models.TextField(
        max_length=1000,
        null=True,
        blank=True,
        help_text="발표 소개 페이지에 들어가는 내용입니다. 변경 사항은 최대 60분 이내에 적용됩니다.",
    )
    video_url = models.CharField(
        max_length=255, null=True, blank=True, help_text="발표 영상 URL"
    )
    slide_url = models.CharField(
        max_length=255, null=True, blank=True, help_text="발표 자료 URL"
    )
    video_open_at = models.DateTimeField(
        null=True, blank=True, help_text="파이콘 한국 유튜브에 공개되는 시간"
    )
    track_num = models.IntegerField(null=True, blank=True, help_text="트랙 번호")

    # 이력관리용 필드
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
