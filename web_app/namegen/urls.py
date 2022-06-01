from django.urls import path
from namegen import views

urlpatterns = [
        path('', views.index, name='Index'),
]
