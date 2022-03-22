from import_export import resources, fields

from sponsor.models import Sponsor


class SponsorResource(resources.ModelResource):
    document_name = fields.Field(default='파이콘 한국 2022 후원사 약관')
    comment = fields.Field(default='')
    password = fields.Field(default='')
    name_for_self_auth = fields.Field(default='')
    phone_number_for_self_auth = fields.Field(default='')

    class Meta:
        model = Sponsor
        field = ('document_name', 'manager_name', 'manager_email',
                 'comment', 'password', 'name_for_self_auth', 'phone_number_for_self_auth',
                 'name',)
        export_order = field
