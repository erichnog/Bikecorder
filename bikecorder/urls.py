from django.conf.urls.defaults import patterns, include, url


urlpatterns = patterns('',  
    (r'^add/', 'bikecorder.views.add'),
    (r'^bikecorder.manifest', 'bikecorder.views.manifest'),
    (r'', 'bikecorder.views.index'),
)