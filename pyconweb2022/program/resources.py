from program.models import ProgramCategory, Proposal

from import_export import resources


class ProgramCategoryResource(resources.ModelResource):
    class Meta:
        model = ProgramCategory


class ProposalResource(resources.ModelResource):
    class Meta:
        model = Proposal
