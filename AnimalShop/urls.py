"""
URL configuration for AnimalShop project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from tienda import views
from tienda.views import index, agregar_producto, eliminar_producto, restar_producto, limpiar_carrito



urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.index, name='index'),
    path('agregar/<int:producto_id>/', agregar_producto, name="Add"),
    path('eliminar/<int:producto_id>/', eliminar_producto, name="Del"),
    path('restar/<int:producto_id>/', restar_producto, name="Sub"),
    path('limpiar/', limpiar_carrito, name="CLS"),
    path('login/', views.login, name='login'),
    path('registro/', views.registro, name='registro'),
    path('pagar/',views.pagar, name='pagar'),
    
    
]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
