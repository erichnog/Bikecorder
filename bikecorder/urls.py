from django.conf.urls.defaults import patterns, include, url


urlpatterns = patterns('',  
    (r'^add/', 'bikecorder.views.add'),
    (r'^list/', 'bikecorder.views.list'),
    (r'', 'bikecorder.views.index'),
)