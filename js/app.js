

var nombre = document.getElementById("nombre");
var correo = document.getElementById("email");
var mensaje = document.getElementById("mensaje");
var alerta = document.getElementById("alerta");
var alerta2 = document.getElementById("alerta2");
var alerta3 = document.getElementById("alerta3");
var alerta4 = document.getElementById("alerta4");

var form = document.getElementById("formulario");
form.addEventListener('submit',function(evt){
    evt.preventDefault();
    var b = 0;


    if(nombre.value == "" || nombre.value == null){
        nombre.classList.add("error")
        nombre.classList.remove("exito");
        alerta.classList.remove("alerta2");
        alerta.innerHTML = "Nombre Obligatorio"
        alerta.classList.add("alerta")
        b = 1;

    }else{
        nombre.classList.remove("error");
        nombre.classList.add("exito");
        alerta.classList.remove("alerta");
        alerta.classList.add("alerta2");
        alerta.innerHTML = "El Nombre Ingresado es Valido!";

    }
    //////////////////////////////////////

    if(correo.value == "" || correo.value == null){
        correo.classList.add("error")
        correo.classList.remove("exito");
        alerta2.classList.remove("alerta2");
        alerta2.innerHTML = "El Correo Es Obligatorio"
        alerta2.classList.add("alerta")
        b = 1;

    }else{
        correo.classList.remove("error");
        correo.classList.add("exito");
        alerta2.classList.remove("alerta");
        alerta2.classList.add("alerta2");
        alerta2.innerHTML = "El Correo Ingresado es Valido!";

    }


    
    if(mensaje.value == "" || mensaje.value == null){
        mensaje.classList.add("error")
        mensaje.classList.remove("exito");
        alerta3.classList.remove("alerta2");
        alerta3.innerHTML = "Escriba Su Mensaje!"
        alerta3.classList.add("alerta")
        b = 1;

    }else{
        mensaje.classList.remove("error");
        mensaje.classList.add("exito");
        alerta3.classList.remove("alerta");
        alerta3.classList.add("alerta2");
        alerta3.innerHTML = "Mensaje Aceptado";

    }


    console.log(b)
    if(b == 0){
        alert("TODOS LOS CAMPOS SE COMPLETARON CORRECTAMENTE LO CONTACTAREMOS EN BREVE!")
        alerta4.classList.add("alerta2");
        alerta4.innerHTML = "SU MENSAJE FUE RECIBIDO CON EXITO EN UN MOMENTO CONTACTAREMOS CON USTED";
    }
    
})

