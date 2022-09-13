from django.template import loader

from rest_framework import serializers

from content.models import Content


class ContentSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    # SerializerMethodField: https://ssungkang.tistory.com/entry/Django-Serializer-Custom-Field-SerializerMethodField
    # content = serializers.SerializerMethodField()
    # eng_content = serializers.SerializerMethodField()
    content = serializers.CharField()
    eng_content = serializers.CharField()

    class Meta:
        model = Content
        fields = ["slug", "title", "content", "eng_content", "created_at"]
