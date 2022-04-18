from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.response import Response
from rest_framework.permissions import AllowAny


from content.models import Content
from content.serializers import ContentSerializer

from martor.utils import markdownify
from django.template.loader import render_to_string
from django.template import loader
from django.template import Template, Context


class ContentViewSet(ReadOnlyModelViewSet):
    queryset = Content.objects.all().order_by("created_at").reverse()
    serializer_class = ContentSerializer
    permission_classes = [AllowAny]

    def retrieve(self, request, *args, **kwargs):
        queryset = Content.objects.get(slug=kwargs["pk"])
        serializer = self.serializer_class(queryset, many=False)

        return Response(serializer.data)
