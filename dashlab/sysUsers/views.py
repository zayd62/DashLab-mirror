from django.shortcuts import render, redirect
from django.views.generic import TemplateView

# class LoginView(TemplateView):
#     template_name = 'frontend/index.js'

#     def home(request):
#         if request.user.is_authenticated:
#             if request.user.is_Admin:
#                 return redirect('')
#             else:
#                 return redirect('')
#         return render(request, '')
