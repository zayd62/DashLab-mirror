from django.contrib import admin
from django.urls import path, include
from .views import home

from accounts.views import login_view, register_view, logout_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home),
    path('accounts/login/', login_view),
    path('accounts/register/', register_view),
    path('accounts/logout/', logout_view),
    path('', include('post.urls'))
]