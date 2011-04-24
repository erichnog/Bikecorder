from django.conf.urls.defaults import patterns, include, url


urlpatterns = patterns('',  
    (r'^add/', 'bikecorder.views.add'),
    (r'', 'bikecorder.views.index'),
)