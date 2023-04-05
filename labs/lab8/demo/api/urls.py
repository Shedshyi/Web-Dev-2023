from django.urls import path, re_path
from api import views
# from api.views import product_list, product_detail, category_list, category_detail, category_products

urlpatterns = [
    path('home/', views.home),
    path('products/', views.product_list),
    path('products/<int:product_id>/', views.product_detail),
    path('categories/', views.category_list),
    path('categories/<int:category_id>/', views.category_detail),
    path('categories/<int:category_id>/products/', views.category_products)
]