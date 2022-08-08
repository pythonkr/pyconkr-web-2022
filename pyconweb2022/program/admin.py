from django.contrib import admin
from django.db import models

from import_export.admin import ImportExportModelAdmin

from .models import Proposal, ProgramCategory


class ProgramCategoryAdmin(admin.ModelAdmin):
    list_display = ("name",)


admin.site.register(ProgramCategory, ProgramCategoryAdmin)


class ProgramAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "user_name",
        "difficulty",
        "duration",
        "language",
        "category",
        "video_open_at",
        "track_num",
    )
    ordering = (
        "video_open_at",
        "track_num",
    )
    search_fields = ("title",)

    def get_queryset(self, request):
        if request.user.is_superuser:
            return super(ProgramAdmin, self).get_queryset(request)
        else:
            return Proposal.objects.filter(user=request.user)

    def has_delete_permission(self, request, obj=None):
        if request.user.is_superuser:
            return True
        else:
            return False

    def get_form(self, request, obj=None, change=False, **kwargs):
        if not request.user.is_superuser:
            kwargs["exclude"] = [
                "user",
                "difficulty",
                "duration",
                "language",
                "category",
                "accepted",
                "introduction",
                "video_url",
                "slide_url",
                "video_open_at",
                "track_num",
                "title",
            ]

        return super().get_form(request, obj=None, change=False, **kwargs)


admin.site.register(Proposal, ProgramAdmin)
