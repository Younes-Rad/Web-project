# store/serializers.py

from rest_framework import serializers
from .models import Product, Order, OrderItem

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price']

class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    cost = serializers.DecimalField(max_digits=10, decimal_places=0, read_only=True)

    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'quantity', 'price', 'cost']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)
    total_cost = serializers.DecimalField(max_digits=10, decimal_places=0, read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True) # برای نمایش متن وضعیت

    class Meta:
        model = Order
        fields = ['id', 'created_at', 'status', 'status_display', 'total_cost', 'items']