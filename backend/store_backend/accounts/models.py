# accounts/models.py

from django.db import models
from django.contrib.auth.models import User
from decimal import Decimal
from store.models import Product

class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='account')

    national_id = models.CharField("کد ملی", max_length=10, unique=True, null=True, blank=True)
    birth_date = models.DateField("تاریخ تولد", null=True, blank=True)
    education = models.CharField("تحصیلات", max_length=100, null=True, blank=True)  # اختیاری
    occupation = models.CharField("شغل", max_length=100, null=True, blank=True)  # اختیاری

    mobile_phone_number = models.CharField("شماره موبایل", max_length=20, null=True, blank=True)
    phone_number = models.CharField("شماره تلفن", max_length=20, null=True, blank=True)
    province = models.CharField("استان", max_length=50, null=True, blank=True)
    city = models.CharField("شهر", max_length=50, null=True, blank=True)
    postal_code = models.CharField("کد پستی", max_length=10, null=True, blank=True)
    full_address = models.TextField("آدرس کامل پستی", null=True, blank=True)

    purchase_credit = models.DecimalField("اعتبار خرید", max_digits=10, decimal_places=0, default=Decimal('0.0'))

    wishlist = models.ManyToManyField(Product, blank=True, related_name="favorited_by", verbose_name="لیست علاقه‌مندی‌ها")

    def __str__(self):
        return f"Profile of {self.user.get_full_name() or self.user.username}"
