import os

from pyconweb2022.settings import *

# RDS
if os.environ.get("AWS_PSQL_HOST"):
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.postgresql",
            "HOST": os.getenv("AWS_PSQL_HOST"),
            "PORT": os.getenv("AWS_PSQL_PORT"),
            "NAME": os.getenv("AWS_PSQL_DATABASE"),
            "USER": os.getenv("AWS_PSQL_USER_ID"),
            "PASSWORD": os.getenv("AWS_PSQL_PW"),
        }
    }
else:
    DATABASES = {
        "default": {
            "ENGINE": "mysql.connector.django",
            "NAME": os.getenv("AWS_RDS_DATABASE"),
            "USER": os.getenv("AWS_RDS_USER_ID"),
            "PASSWORD": os.getenv("AWS_RDS_PW"),
            "HOST": os.getenv("AWS_RDS_HOST"),
            "PORT": os.getenv("AWS_RDS_PORT"),
        }
    }

# S3 static
del AWS_S3_SESSION_PROFILE  # 운영환경에서는 Key와 Secret을 사용해 S3 인증 수행
AWS_S3_ACCESS_KEY_ID = os.getenv("AWS_S3_KEY")
AWS_S3_SECRET_ACCESS_KEY = os.getenv("AWS_S3_SECRET")
