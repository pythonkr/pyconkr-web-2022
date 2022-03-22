from django.contrib import admin

from pyconemailer.models import Mailing


# Register your models here.
class MailingAdmin(admin.ModelAdmin):
    list_display = ("category", "email")


admin.site.register(Mailing, MailingAdmin)
