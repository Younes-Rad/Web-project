# Generated by Django 5.2.3 on 2025-07-04 16:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0001_initial"),
        ("store", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="account",
            name="wishlist",
            field=models.ManyToManyField(
                blank=True,
                related_name="favorited_by",
                to="store.product",
                verbose_name="لیست علاقه\u200cمندی\u200cها",
            ),
        ),
    ]
