$(document).ready(function(){
    $("#registro").submit(function(event){
        event.preventDefault();


        var contraseña = $("#contraseña").val();



        if(contraseña.length < 3 || contraseña.length > 12){
            alert("La contraseña debe tener entre 3 y 12 caracteres.");
            return;
        }

        sessionStorage.setItem('autentificado',true);


        alert("Inicio de sesion Exitoso!");
        window.location.href = "http://127.0.0.1:8000/ ";

    });
});

