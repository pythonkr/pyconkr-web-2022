from datetime import datetime, timezone, timedelta

from rest_framework import viewsets

from .models import News
from .serializers import NewsSerializer


class NewsViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = NewsSerializer
    queryset = News.objects.filter(
        visible_at__lte=datetime.now(tz=timezone(timedelta(hours=9)))
    )
