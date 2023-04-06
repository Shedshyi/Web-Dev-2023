from django.shortcuts import render
from django.http.response import HttpResponse
from api.models import Company, Vacancy
from django.http import JsonResponse
from django.core import serializers

def home(request):
    return HttpResponse('home page')

def companies_list(request):
    companies = Company.objects.all()
    companies_json = [c.to_json() for c in companies]
    return JsonResponse(companies_json, safe=False)

def company_details(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as exception:
        return JsonResponse({'exception': str(exception)}, status=400)
    return JsonResponse(company.to_json())

def company_vacancies(request, company_id):
    try:
        vacancies = Vacancy.objects.all().filter(company=company_id)
        vacancies_json = serializers.serialize('json', vacancies)
    except Company.DoesNotExist as exception:
        return JsonResponse({'exception': str(exception)}, status=400)
    return JsonResponse(vacancies_json, content_type='application/json', safe=False)

def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_details(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as exception:
        return JsonResponse({'exception': str(exception)}, status=400)
    return JsonResponse(vacancy.to_json())

def vacancies_top_ten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')
    vacancies = vacancies[0:10]
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)
