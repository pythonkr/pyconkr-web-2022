from django.template import loader

from rest_framework import serializers

from .models import News


class NewsSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField()
    content = serializers.CharField()
    eng_content = serializers.CharField()
    url = serializers.CharField(allow_null=True, allow_blank=True)
    visible_at = serializers.DateTimeField()
    created_at = serializers.DateTimeField(required=False)
    updated_at = serializers.DateTimeField(required=False)
