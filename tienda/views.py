from django.shortcuts import render,redirect
from tienda.Carrito import Carrito
from tienda.models import Producto
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def index(request):
    productos = Producto.objects.all()
    return render(request, 'index.html', {'productos':productos})

def agregar_producto(request, producto_id):
    carrito = Carrito(request)
    producto = Producto.objects.get(id=producto_id)
    carrito.agregar(producto)
    return render(request, 'index.html', {'productos': Producto.objects.all()})


def eliminar_producto(request, producto_id):
    carrito = Carrito(request)
    producto = Producto.objects.get(id=producto_id)
    carrito.eliminar(producto)
    return redirect("index")

def restar_producto(request, producto_id):
    carrito = Carrito(request)
    producto = Producto.objects.get(id=producto_id)
    carrito.restar(producto)
    return redirect("index")

def limpiar_carrito(request):
    carrito = Carrito(request)
    carrito.limpiar()
    return redirect("index")
    

def login(request):
    return render(request, 'login.html')

def registro(request):
    return render(request, 'registro.html')

def carrito(request):
    return render(request, 'carrito.html')

def pagar(request):
    carrito = request.session.get('carrito', {})
    total_carrito = 0
    
    for item in carrito.values():
        try:
            total_carrito += item['acumulado']
        except KeyError:
            continue
    
    context = {
        'carrito': carrito,
        'total_carrito': total_carrito
    }
    return render(request, 'pagar.html', context)


@csrf_exempt
def procesar_pago(request):
    if request.method == 'POST':
        nombre = request.POST.get('nombre')
        correo = request.POST.get('email')
        direccion = request.POST.get('direccion')
        tarjeta = request.POST.get('tarjeta')
        vencimiento = request.POST.get('vencimiento')
        cvv = request.POST.get('cvv')
        request.session['carrito'] = {} 
        
        return render(request, 'agradecimiento.html')

   
    return redirect('index') 

