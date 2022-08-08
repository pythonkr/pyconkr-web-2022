from django.apps import AppConfig


class PyconemailerConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "pyconemailer"

    def ready(self):
        import pyconemailer.signals
