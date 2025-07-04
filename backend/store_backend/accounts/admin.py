# accounts/admin.py

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User
from .models import Account

class AccountInline(admin.StackedInline):
    """
    این کلاس اجازه می‌دهد مدل Account را در صفحه ویرایش User نمایش دهیم.
    """
    model = Account
    can_delete = False
    verbose_name_plural = 'اطلاعات تکمیلی'

class CustomUserAdmin(BaseUserAdmin):
    """
    ادمین پیش‌فرض User را با اطلاعات تکمیلی Account ترکیب می‌کند.
    """
    inlines = (AccountInline,)

# ابتدا ثبت پیش‌فرض User را لغو می‌کنیم
admin.site.unregister(User)
# سپس User را با ادمین سفارشی خودمان ثبت می‌کنیم
admin.site.register(User, CustomUserAdmin)