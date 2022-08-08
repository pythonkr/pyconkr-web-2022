from django.db import models


class Content(models.Model):
    slug = models.CharField(max_length=50)
    title = models.CharField(max_length=500)
    content = models.TextField()
    eng_content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True)
