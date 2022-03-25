import datetime

from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail

from pyconemailer.models import Queue


@receiver(post_save, sender=Queue)
def _post_save_mail_queue(sender, **kwargs):
    queryset = Queue.objects.filter(send_at__lte=datetime.datetime.now(), is_sent=False)

    for q in queryset:
        pass

    send_mail("제목", "내용", "pyconkr@pycon.kr", ["pyconkr@pycon.kr"])
