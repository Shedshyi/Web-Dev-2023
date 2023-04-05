from django.urls import path, re_path

from shopback_main import views

urlpatterns = [
    path('products/', views.product_list),
    path('products/<int:product_id>/', views.product_detail)
]

