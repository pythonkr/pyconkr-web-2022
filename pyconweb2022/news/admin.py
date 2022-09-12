from django.contrib import admin

from import_export.admin import ImportExportModelAdmin

from news.models import News
from news.resources import NewsResource


class NewsAdmin(ImportExportModelAdmin):
    resource_class = NewsResource
    app_label = "News"
    list_display = (
        "id",
        "title",
        "visible_at",
        "created_at",
        "updated_at",
    )


admin.site.register(News, NewsAdmin)
