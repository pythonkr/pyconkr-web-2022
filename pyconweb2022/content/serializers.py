from django.template import loader

from rest_framework import serializers

from content.models import Content


class ContentSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    # SerializerMethodField: https://ssungkang.tistory.com/entry/Django-Serializer-Custom-Field-SerializerMethodField
    content = serializers.SerializerMethodField()

    def get_content(self, obj):
        context = dict()
        context["content"] = obj.content

        # html_template = Template(
        #     render_to_string("markdown.html", context)
        # )  # 마크다운 렌더링

        html_template = loader.get_template("markdown.html")

        return html_template.render(context)

    class Meta:
        model = Content
        fields = ['slug', 'title', 'content', 'created_at']
