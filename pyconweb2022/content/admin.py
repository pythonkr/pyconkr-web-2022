from django.contrib import admin
from django.db import models

from content.models import Content
from content.resources import ContentResource

from martor.widgets import AdminMartorWidget
from import_export.admin import ImportExportModelAdmin


class ContentAdmin(ImportExportModelAdmin):
    resource_class = ContentResource
    list_display = (
        "slug",
        "title",
    )
    formfield_overrides = {models.TextField: {"widget": AdminMartorWidget}}


admin.site.register(Content, ContentAdmin)
