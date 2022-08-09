from django.contrib import admin

from news.models import News


class NewsAdmin(admin.ModelAdmin):
    app_label = 'News'
    list_display = ('id', 'title', 'visible_at', 'created_at', 'updated_at',)


admin.site.register(News, NewsAdmin)
