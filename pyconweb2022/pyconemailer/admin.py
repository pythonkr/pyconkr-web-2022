from django.contrib import admin

from pyconemailer.models import EmailTemplates, Mailing, Queue


class EmailTemplatesAdmin(admin.ModelAdmin):
    list_display = ("title",)


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
