from rest_framework import serializers

from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField()
    content = serializers.CharField()
    url = serializers.CharField(allow_null=True, allow_blank=True)
    visible_at = serializers.DateTimeField()
    created_at = serializers.DateTimeField(required=False)
    updated_at = serializers.DateTimeField(required=False)
    
    class Meta: 
        model = Article
        fields ='__all__'

    # 시간되면 추가..
    def validate(self, attrs):
        return attrs