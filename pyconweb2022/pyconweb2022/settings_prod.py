import os

from pyconweb2022.settings import *

# RDS
DATABASES = {
    "default": {
        "ENGINE": "mysql.connector.django",
        "NAME": "pyconkrweb2022dev",
        "USER": "pyconkrweb2022dev",
        "PASSWORD": "devdevdev2022##2022",
        "HOST": "pyconkr2022-dev.cluster-c3lemconopmq.ap-northeast-2.rds.amazonaws.com",
        "PORT": "3306",
    }
}

# S3 static
del AWS_S3_SESSION_PROFILE  # 운영환경에서는 Key와 Secret을 사용해 S3 인증 수행
AWS_S3_ACCESS_KEY_ID = os.getenv("AWS_S3_KEY")
AWS_S3_SECRET_ACCESS_KEY = os.getenv("AWS_S3_SECRET")
