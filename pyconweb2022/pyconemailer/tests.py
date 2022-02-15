from django.test import TestCase
import pytest

# Create your tests here.

@pytest.mark.django_db
def test_get_pyconemail_page(client):
    request = client.get('/pyconemailer/')
    assert request.status_code == 200
