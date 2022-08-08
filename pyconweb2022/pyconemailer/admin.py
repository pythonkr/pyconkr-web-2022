from django.contrib import admin
from django.db import models

from pyconemailer.models import EmailTemplates, Mailing, Queue

from martor.widgets import AdminMartorWidget


class EmailTemplatesAdmin(admin.ModelAdmin):
    list_display = ("title",)
    formfield_overrides = {models.TextField: {"widget": AdminMartorWidget}}


class MailingAdmin(admin.ModelAdmin):
    list_display = (
        "category",
        "email",
    )


class QueueAdmin(admin.ModelAdmin):
    list_display = (
        "category",
        "is_sent",
        "send_at",
    )


admin.site.register(EmailTemplates, EmailTemplatesAdmin)
admin.site.register(Mailing, MailingAdmin)
admin.site.register(Queue, QueueAdmin)
