# store/models.py

from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    name = models.CharField("نام محصول", max_length=200)
    description = models.TextField("توضیحات", blank=True)
    price = models.DecimalField("قیمت", max_digits=10, decimal_places=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Order(models.Model):
    class OrderStatus(models.TextChoices):
        PENDING = 'P', 'در انتظار پرداخت'
        PROCESSING = 'PR', 'در حال پردازش'
        SHIPPED = 'S', 'ارسال شده'
        DELIVERED = 'D', 'تحویل شده'
        CANCELED = 'C', 'لغو شده'

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders', verbose_name="کاربر")
    created_at = models.DateTimeField("زمان ثبت", auto_now_add=True)
    updated_at = models.DateTimeField("آخرین آپدیت", auto_now=True)
    status = models.CharField("وضعیت سفارش", max_length=2, choices=OrderStatus.choices, default=OrderStatus.PENDING)

    def __str__(self):
        return f"سفارش {self.id} برای {self.user.username}"

    @property
    def total_cost(self):
        return sum(item.cost for item in self.items.all())

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items', verbose_name="سفارش")
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='order_items', verbose_name="محصول")
    price = models.DecimalField("قیمت", max_digits=10, decimal_places=0) # قیمت در لحظه خرید
    quantity = models.PositiveIntegerField("تعداد", default=1)

    def __str__(self):
        return str(self.id)

    @property
    def cost(self):
        return self.price * self.quantity