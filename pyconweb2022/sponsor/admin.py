from django.contrib import admin
from django.db import models

from sponsor.models import Sponsor, SponsorLevel, PersonalSponsorship
from sponsor.resources import SponsorResource

from import_export.admin import ImportExportModelAdmin
from martor.widgets import AdminMartorWidget


class SponsorAdmin(ImportExportModelAdmin):
    list_display = (
        "name",
        "level",
        "manager_name",
        "manager_email",
        "submitted",
        "accepted",
        "paid_at",
    )
    list_filter = ("accepted",)
    ordering = ("-created_at",)
    formfield_overrides = {models.TextField: {"widget": AdminMartorWidget}}


admin.site.register(Sponsor, SponsorAdmin)


class SponsorLevelAdmin(ImportExportModelAdmin):
    list_display = (
        "id",
        "order",
        "name",
        "slug",
        "price",
        "limit",
    )
    list_editable = (
        "order",
        "slug",
    )
    ordering = ("order",)
    search_fields = ("name",)


admin.site.register(SponsorLevel, SponsorLevelAdmin)


# 하나의 모델을 여러 Admin에서 사용할 수 있도록 Proxy 작성
# https://stackoverflow.com/questions/2223375/multiple-modeladmins-views-for-same-model-in-django-admin
class SponsorProxyModel(Sponsor):
    class Meta:
        verbose_name = "To Be Send ModuSign"
        verbose_name_plural = "To Be Send ModuSign"
        proxy = True


class SponsorAdmin4Modusign(SponsorAdmin):
    list_display = (
        "manager_name",
        "manager_email",
        "exported",
        "created_at",
    )
    ordering = ("-created_at",)
    resource_class = SponsorResource

    def get_queryset(self, request):
        return Sponsor.objects.filter(exported=False)


# admin.site.register(SponsorProxyModel, SponsorAdmin4Modusign)


class PersonalSponsorshipAdmin(ImportExportModelAdmin):
    list_display = (
        "name",
        "amount",
        "message",
    )
    ordering = ("-amount",)


admin.site.register(PersonalSponsorship, PersonalSponsorshipAdmin)
