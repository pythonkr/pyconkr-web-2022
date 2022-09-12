from django.test import TestCase, Client
from django.contrib.auth.models import User

from program.models import ProgramCategory, Proposal
from pyconweb2022 import config

import datetime

from django.contrib.auth import get_user_model
from django.test import TestCase
from rest_framework.test import APIRequestFactory

from program.models import Proposal, ProgramCategory
from program.viewsets import ProposalViewSet

User = get_user_model()


class ProgramTest(TestCase):
    user_name = ["park", "seo", "kim", "jung", "kang"]
    title = ["제목1", "제목2", "제목3", "제목4", "제목5"]
    brief = ["brief1", "brief2", "brief3", "brief4", "brief5"]
    desc = ["desc1", "desc2", "desc3", "desc4", "desc5"]
    difficulty = ["B", "I", "E", "B", "I"]
    duration = ["S", "L", "S", "L", "S"]

    def setUp(self) -> None:
        # 사용자 객체 생성
        for i in range(len(self.user_name)):
            new_user = User()
            new_user.username = self.user_name[i]
            new_user.set_password(self.user_name[i])
            new_user.save()

        # Category 생성
        new_category = ProgramCategory()
        new_category.name = ["카테고리"]
        new_category.slug = ["category"]
        new_category.save()

        # Proposal 생성
        target_user = User.objects.get(username=self.user_name[0])

        for i in range(len(self.user_name)):
            new_proposal = Proposal()
            new_proposal.user = target_user
            new_proposal.title = self.title[i]
            new_proposal.brief = self.brief[i]
            new_proposal.desc = self.desc[i]
            new_proposal.difficulty = self.difficulty[i]
            new_proposal.duration = self.duration[i]
            new_proposal.category = new_category

            new_proposal.save()

    def test_ProposalViewSet(self):
        req_body = {
        }

        request = APIRequestFactory().get("/api/program/list", req_body)
        response = ProposalViewSet().list(request=request)

        self.assertEqual(len(response.data), len(self.user_name))
