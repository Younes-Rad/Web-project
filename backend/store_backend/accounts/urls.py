# accounts/urls.py

from django.urls import path
from .views import RegisterView, UserProfileView, WishlistAPIView  # UserProfileView را اضافه کنید
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('register/', RegisterView.as_view(), name='auth_register'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # --- مسیر جدید ---
    path('users/me/', UserProfileView.as_view(), name='user_profile'),
    path('wishlist/', WishlistAPIView.as_view(), name='wishlist-manage'),

]