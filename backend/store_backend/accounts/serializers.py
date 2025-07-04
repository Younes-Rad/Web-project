from rest_framework import serializers
from django.contrib.auth.models import User
from django.db.models import Q
from .models import Account
from store.serializers import ProductSerializer


class AccountSerializer(serializers.ModelSerializer):
    wishlist = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = Account
        fields = [
            'national_id', 'birth_date', 'education', 'occupation',
            'mobile_phone_number', 'phone_number', 'province', 'city',
            'postal_code', 'full_address', 'purchase_credit',
            'wishlist'
        ]
        read_only_fields = ['national_id', 'birth_date', 'purchase_credit', 'wishlist']


class UserSerializer(serializers.ModelSerializer):
    account = AccountSerializer()
    password = serializers.CharField(write_only=True, required=False)

    order_count = serializers.SerializerMethodField()
    active_orders_count = serializers.SerializerMethodField()
    shipped_orders_count = serializers.SerializerMethodField()
    canceled_orders_count = serializers.SerializerMethodField()

    gallery_products_count = serializers.SerializerMethodField()
    comments_count = serializers.SerializerMethodField()
    physical_products_count = serializers.SerializerMethodField()

    frequent_purchases = serializers.SerializerMethodField()
    my_gallery = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            'id', 'username', 'email', 'first_name', 'last_name',
            'account', 'password',
            'order_count', 'active_orders_count', 'shipped_orders_count',
            'canceled_orders_count', 'gallery_products_count',
            'comments_count', 'physical_products_count', 'frequent_purchases', 'my_gallery'
        ]
        read_only_fields = ['username', 'id']
        extra_kwargs = {
            'password': {'write_only': True, 'required': False},
        }

    def get_order_count(self, obj):
        return obj.orders.count()

    def get_active_orders_count(self, obj):
        # return obj.orders.filter(status__in=['P', 'PR']).count()
        return 11

    def get_shipped_orders_count(self, obj):
        # return obj.orders.filter(status='S').count()
        return 22


    def get_canceled_orders_count(self, obj):
        # return obj.orders.filter(status='C').count()
        return 5

    def get_gallery_products_count(self, obj):
        return 12

    def get_comments_count(self, obj):
        return 17

    def get_physical_products_count(self, obj):
        return 16

    def get_frequent_purchases(self, obj):
        return []

    def get_my_gallery(self, obj):
        return []

    def update(self, instance, validated_data):
        account_data = validated_data.pop('account', {})
        password = validated_data.pop('password', None)
        account_instance = instance.account
        for attr, value in account_data.items():
            setattr(account_instance, attr, value)
        account_instance.save()
        if password:
            instance.set_password(password)
        return super().update(instance, validated_data)


class RegisterSerializer(serializers.ModelSerializer):
    account = AccountSerializer(required=False)
    password2 = serializers.CharField(write_only=True, required=True)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'password2', 'first_name', 'last_name', 'account')
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        account_data = validated_data.pop('account', None)
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', '')
        )
        if account_data:
            account = user.account
            for attr, value in account_data.items():
                setattr(account, attr, value)
            account.save()
        return user