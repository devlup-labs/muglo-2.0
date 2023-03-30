# from django.contrib import admin
from django.urls import path
from user.views import Custom

urlpatterns = [
    path('api/', Custom.as_view()),
]
