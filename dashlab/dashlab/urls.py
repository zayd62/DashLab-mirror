
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path(r'admin/', (admin.site.urls)),
    path(r'api/', include('post.urls')),
    path(r'auth/', include('djoser.urls')),
    path(r'auth/', include('djoser.urls.authtoken')),
]
