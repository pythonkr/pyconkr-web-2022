from django.db import models


class News(models.Model):
    title = models.CharField(max_length=64)
    content = models.TextField()
    eng_content = models.TextField()
    url = models.URLField(null=True, blank=True)
    visible_at = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        app_label = "news"
        verbose_name = "news"
        verbose_name_plural = "news"

    def __str__(self):
        return self.title
