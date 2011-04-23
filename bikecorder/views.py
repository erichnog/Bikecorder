from django.shortcuts import render_to_response
from django.conf import settings

def add(request):
    """docstring for add"""
    return render_to_response('add.html', {'MURL': settings.MEDIA_ROOT})

def movies(request):
    """docstring for movies"""
    return render_to_response('movies.html', {})