from django.template import loader

from rest_framework import serializers

from .models import News


class NewsSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField()
    content = serializers.SerializerMethodField()
    eng_content = serializers.SerializerMethodField()
    url = serializers.CharField(allow_null=True, allow_blank=True)
    visible_at = serializers.DateTimeField()
    created_at = serializers.DateTimeField(required=False)
    updated_at = serializers.DateTimeField(required=False)

    def get_content(self, obj):
        context = dict()
        context["content"] = obj.content

        # html_template = Template(
        #     render_to_string("markdown.html", context)
        # )  # 마크다운 렌더링

        html_template = loader.get_template("markdown.html")

        return html_template.render(context)

    def get_eng_content(self, obj):
        context = dict()
        context["eng_content"] = obj.eng_content

        # html_template = Template(
        #     render_to_string("markdown.html", context)
        # )  # 마크다운 렌더링

        html_template = loader.get_template("markdown.html")

        return html_template.render(context)
