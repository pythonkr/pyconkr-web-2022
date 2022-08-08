from django.dispatch import receiver
from import_export.signals import post_export


@receiver(post_export)
def _post_sponsor_export(model, **kwargs):
    if model.__name__ == "Sponsor":
        for obj in model.objects.filter(exported=False):
            obj.exported = True
            obj.save()
