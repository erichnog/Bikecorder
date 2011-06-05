from django.shortcuts import render_to_response
from django.template.loader import render_to_string
from django.conf import settings
from django.http import HttpResponse

def index(request):
    """docstring for fname"""
    return render_to_response('index.html', {})

def add(request):
    """docstring for add"""
    return render_to_response('add.html', {})

def manifest(request):
    return HttpResponse(render_to_string('bikecorder.manifest', {}), mimetype='text/cache-manifest')