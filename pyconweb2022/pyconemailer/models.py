from django.db import models

from martor.models import MartorField


class EmailTemplates(models.Model):
    title = models.CharField(max_length=255)
    content = MartorField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Mailing(models.Model):
    category = models.CharField(
        max_length=10,
        choices=(
            ("SPONSOR", "후원사"),
            ("ETC", "기타"),
        ),
    )
    email = models.EmailField(max_length=100)
    is_sent = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Queue(models.Model):
    category = models.CharField(
        max_length=20,
        choices=(
            ("TEST", "전송 테스트"),
            ("SPONSOR", "후원사"),
            ("MAILING_SPONSOR", "후원사 메일링"),
        ),
    )
    email_template_id = models.ForeignKey(EmailTemplates, on_delete=models.RESTRICT)
    is_sent = models.BooleanField(default=False)
    send_at = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
