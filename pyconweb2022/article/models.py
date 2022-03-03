from django.db import models

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=64)
    content = models.TextField()
    url = models.URLField(null=True, blank=True)
    visible_at = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        app_label = "article"
        
    def __str__(self):
        return self.title