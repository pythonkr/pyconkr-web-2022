from django.test import TestCase
from django.apps import apps
import pytest

# Create your tests here.


@pytest.mark.django_db
def test_get_pyconemail_page(client):
    request = client.get("/pyconemailer/")
    assert request.status_code == 200


def test_get_pyconemail_model():
    # testing model EmailTemplates
    try:
        EmailTemplates = apps.get_model(
            app_label="pyconemailer", model_name="EmailTemplates"
        )
    except LookupError:
        pytest.fail("pyconemailer.models.EmailTemplates model not found")
    model_fields = [f.name for f in EmailTemplates._meta.get_fields()]
    # testing title in model field
    assert "title" in model_fields
    assert "content" in model_fields
    assert "created_at" in model_fields
    assert "updated_at" in model_fields
