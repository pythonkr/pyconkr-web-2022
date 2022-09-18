from django.test import TestCase, Client
from django.contrib.auth.models import User

from program.models import ProgramCategory, Proposal
from pyconweb2022 import config

import datetime


class ProgramApiTest(TestCase):
    def setUp(self) -> None:
        user = User.objects.create()
        user.username = "gdhong"
        user.password = "password"
        user.email = "gdhong@pycon.kr"
        user.save()

        category = ProgramCategory(name="임시", slug="temp")
        category.save()

        Proposal(
            user=user,
            user_name="홍길동",
            title="세션 제목1",
            brief="요약1",
            desc="설명1",
            comment="comment1",
            difficulty="I",
            duration="L",
            language="K",
            category=category,
            accepted=True,
            video_open_at=datetime.datetime.strptime(
                config.PYCON_KR_2022_DATE1, "%Y%m%d"
            ),
        ).save()

        Proposal(
            user=user,
            user_name="김철수",
            title="세션 제목2",
            brief="요약2",
            desc="설명2",
            comment="comment2",
            difficulty="I",
            duration="L",
            language="K",
            category=category,
            accepted=True,
            video_open_at=datetime.datetime.strptime(
                config.PYCON_KR_2022_DATE2, "%Y%m%d"
            ),
        ).save()

        Proposal(
            user=user,
            user_name="badUser",
            title="XXXXX",
            brief="XXX",
            desc="XXX",
            comment="XXX",
            difficulty="I",
            duration="L",
            language="K",
            category=category,
            accepted=False,
            video_open_at=datetime.datetime.strptime(
                config.PYCON_KR_2022_DATE2, "%Y%m%d"
            ),
        ).save()

    def test_get_all_session(self):
        c = Client()
        response = c.get("/api/program/list/", {})

        self.assertEqual(response.status_code, 200)
        # self.assertEqual(len(response.data), 2)

    def test_get_day1_session(self):
        c = Client()
        response = c.get("/api/program/list/day1/", {})

        self.assertEqual(response.status_code, 200)
        # self.assertEqual(len(response.data), 1)

    def test_get_day2_session(self):
        c = Client()
        response = c.get("/api/program/list/day2/", {})

        self.assertEqual(response.status_code, 200)
        # self.assertEqual(len(response.data), 1)
