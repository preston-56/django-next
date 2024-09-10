from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

# Optional: Simple view for the root URL
def home_view(request):
    return HttpResponse("Welcome to the API! Use /api/ to access the endpoints.")

urlpatterns = [
    path('', home_view, name='home'),  # Add this line for the root URL
    path('admin/', admin.site.urls),
    path('', include('charts.urls')), 
]