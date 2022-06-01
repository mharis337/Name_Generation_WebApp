from urllib.request import Request
import django
from django.shortcuts import render
from django.http import HttpResponse
from namegen.models import Abbreviations


def index(Request):
    abv_list = Abbreviations.objects.order_by('abv')
    abv_dict = {'abv':abv_list}
          
    
    return render(Request, 'index.html', abv_dict)
    
def show_selections(Request):
    abv_list = Abbreviations.objects.order_by('abv')
    abv_dict = {'abv':abv_list} 
    
    
    return render(Request, 'desc_page.html', abv_dict)