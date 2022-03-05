from django.http import HttpResponse
import datetime

# TODO : 이메일 발송 기능 구현 ( AWS SES 를 사용, QOS 기능이 구현 필요 )
# TODO : 이메일은 템플릿형태로 해서 변수를 삽입가능하다. ( 이름이라던가.. 등등)
# TODO : 이메일은 발송시간을 정할수 있다. ( 스케쥴링 )
# TODO : 이메일은 보낸사람과 내용이 로깅이 된다.
# TODO : 이메일은 테스트기능을 넣어서 보낼때 테스트를 하고 보낼수있다.
# TODO : 이메일을 보낼때 보내는 사람의 이메일을 입력해야한다. ( 이건 아마 파이콘메일링이나 no-reply 등?)
# TODO : 첨부파일 첨부가능 ( S3 링크? )
# TODO : unsubscribe 기능?

# TODO : 이메일은 markdown 으로만 쓸수 있다. => markdown 으로 된 모델을 만들자.


def index(request):
    now = datetime.datetime.now()
    html = "<html><body>It is now %s.</body></html>" % now
    return HttpResponse(html)
