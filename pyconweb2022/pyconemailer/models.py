from django.db import models


# Create your models here.


class EmailTemplates(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Mailing(models.Model):
    category = models.CharField(max_length=10,
                                choices=(
                                    ('SPONSOR', '후원사'),
                                    ('ETC', '기타'),
                                ))
    email = models.EmailField(max_length=100)
    is_sent = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

