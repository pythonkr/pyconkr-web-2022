# Generated by Django 4.0.2 on 2022-09-19 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("program", "0002_proposal_speaker_profile_img_alter_proposal_language"),
    ]

    operations = [
        migrations.AddField(
            model_name="proposal",
            name="eng_desc",
            field=models.TextField(blank=True, max_length=4000, null=True),
        ),
    ]
