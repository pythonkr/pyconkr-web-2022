from django.contrib import admin
from django.db import models

from content.models import Content

from martor.widgets import AdminMartorWidget


class ContentAdmin(admin.ModelAdmin):
    list_display = (
        "slug",
        "title",
    )
    formfield_overrides = {models.TextField: {"widget": AdminMartorWidget}}


admin.site.register(Content, ContentAdmin)
