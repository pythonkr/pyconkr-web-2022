from rest_framework import mixins, viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Article

from .serializers import ArticleSerializer


class ArticleViewSet(
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    viewsets.GenericViewSet
):
    serializer_class = ArticleSerializer
    permission_class = (IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        return Article.objects.all()

    def get_object(self):
        return Article.objects.filter(id=self.kwargs["pk"]).first()
        
