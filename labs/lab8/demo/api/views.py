from django.shortcuts import render
from django.http.response import JsonResponse, HttpResponse
from api.models import Product, Category


def home(request):
    return HttpResponse('home page')


def product_list(request):
    # select * from auth_product;
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)


def product_detail(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as exception:
        return JsonResponse({'exception' : str(exception)}, status=400)
    return JsonResponse(product.to_json())

def category_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)

def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as exception:
        return JsonResponse({'exception' : str(exception)}, status=400)
    return JsonResponse(category.to_json())

def category_products(request, category_id):
    try:
        products = Product.objects.all().filter(categoryId=category_id)
        products_json = [product.to_json() for product in products]
    except Product.DoesNotExist as exception:
        return JsonResponse({'exception' : str(exception)}, status=400)
    return JsonResponse(products_json, safe=False)