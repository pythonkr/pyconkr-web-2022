from rest_framework import mixins, viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import News

from .serializers import NewsSerializer


class NewsViewSet(
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    viewsets.GenericViewSet,
):
    serializer_class = NewsSerializer
    permission_class = (IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        return News.objects.all()

    def get_object(self):
        return News.objects.filter(id=self.kwargs["pk"]).first()
