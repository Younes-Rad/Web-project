# store/admin.py

from django.contrib import admin
from .models import Product, Order, OrderItem

class OrderItemInline(admin.TabularInline):
    """
    این کلاس اجازه می‌دهد آیتم‌های سفارش را مستقیماً در صفحه جزئیات سفارش ویرایش کنیم.
    """
    model = OrderItem
    raw_id_fields = ['product'] # برای جستجوی راحت‌تر محصول
    extra = 1 # تعداد فرم خالی برای افزودن آیتم جدید

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    """
    کلاس برای سفارشی‌سازی نمایش سفارشات در پنل ادمین.
    """
    list_display = ['id', 'user', 'status', 'created_at']
    list_filter = ['status', 'created_at']
    search_fields = ['user__username', 'id']
    inlines = [OrderItemInline] # افزودن آیتم‌های سفارش به صفحه سفارش

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    """
    کلاس برای سفارشی‌سازی نمایش محصولات.
    """
    list_display = ['name', 'price', 'created_at']
    search_fields = ['name']