from django.shortcuts import render_to_response
from django.conf import settings

def index(request):
    """docstring for fname"""
    return render_to_response('index.html', {})

def add(request):
    """docstring for add"""
    return render_to_response('add.html', {})
