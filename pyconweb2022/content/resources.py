from import_export import resources

from content.models import Content


class ContentResource(resources.ModelResource):
    class Meta:
        model = Content
