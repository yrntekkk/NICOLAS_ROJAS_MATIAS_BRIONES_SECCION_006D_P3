//Funcion para mostrar el Toast cada 10 segundos
function mostrarNotificacion() {
    var toast = document.getElementById('liveToast'); //Con esto obtenemos el elemento con el id liveToast
    var bsToast = new bootstrap.Toast(toast);//Creamos un objeto de tipo bsToast
    bsToast.show(); //Lo mostramos
}
//Intervalo entre notificaciones 
setInterval(mostrarNotificacion, 10000);




//Espera a que el DOM este cargado para ejecutar el codigo
document.addEventListener("DOMContentLoaded", function(){
    const enlace = document.querySelector("#navbar-brand"); //Para seleccionar el elemento por su id
    const texto = '<span class="text-danger ms-2">Animal</span><span>Shop</span>'; //Texto que se anima
    const velocidad = 150; //Velocidad a la que va la animacion
    let contenido = '';  //Definimos esta variable para contener el texto animado
    let indice = 0;

//Funcion para animar el texto
    function animarTexto(){
        //Este if es para ver si aun quedan caracteres que agregar al texto
        if (indice < texto.length){
            //Si es que aun faltan caracteres agrega el siguiente a la variable contenido
            contenido += texto.charAt(indice);
            //Cursor que da el efecto como si alguien estuviese escribiendo la palabra :)
            enlace.innerHTML = contenido + '<span class="cursor text-light"></span>';
            indice++; //Se usa para pasar al siguiente caracter
            setTimeout(animarTexto, velocidad); 
        }
        else{
            enlace.innerHTML = contenido;
        }
    }
    animarTexto();
});

//Funciones para cerrar he iniciar sesion

$(document).ready(function(){
    if(sessionStorage.getItem('autentificado')){ //con esto obtendremos el valor que esta almacenado en autenticado
        $('#botoniniciar').hide();               //Si esta autentificado oculta el boton de iniciar sesion y muestra el de cerrar sesion
        $('#botoncerrar').show();
    }
    else{                                        //si esque no esta autentificado el boton de iniciar sesion se mantiene visible y el de cerrar sesion se queda oculto
        $('#botoniniciar').show();
        $('#botoncerrar').hide();
    }
});

function cerrarsesion(){                         //Funcion para cerrar sesion
    sessionStorage.removeItem('autentificado');  //Con esto borramos lo que estaba guardado en autentificado es decir el usuario ya no estaria autentificado   
    window.location.href='index.html';           //Con esto mandamos al usuario a la pagina principal despues de cerrar la sesion
}
