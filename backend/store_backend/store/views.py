# store/views.py
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Order
from .serializers import OrderSerializer

class OrderHistoryView(generics.ListAPIView):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # فقط سفارشات مربوط به کاربر لاگین کرده را برمی‌گرداند
        return Order.objects.filter(user=self.request.user).order_by('-created_at')