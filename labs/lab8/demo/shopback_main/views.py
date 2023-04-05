from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

# Create your views here.

products = [
    {
        'id': _id,
        'name': f'Product{_id}',
        'price': _id * 1000
    }
    for _id in range(1,11)
]

def product_list(request):
    return JsonResponse(products, safe=False)

def product_detail(request, product_id):
    for product in products:
        if product['id'] == product_id:
            return JsonResponse(product)

    return JsonResponse({'error': 'Product not found'})