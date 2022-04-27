var nombre = document.getElementById('nombre')
var apellido = document.getElementById('apellido')
var edad = document.getElementById('edad')
var btn = document.getElementById('btn')
var miObjeto = new Object()

btn.addEventListener('click', function(){
    if(nombre.value == ''){
        miObjeto.nombre = 'Vacío'
    }else{
        miObjeto.nombre = nombre.value
    }

    if(apellido.value == ''){
        miObjeto.apellido = 'Vacío'
    }else{
        miObjeto.apellido = apellido.value
    }

    if(edad.value == ''){
        miObjeto.edad = 'Vacío'
    }else{
        miObjeto.edad = edad.value
    }

    alert('Nombre: ' + miObjeto.nombre + ', Apellido: ' + miObjeto.apellido + ', Edad: ' + miObjeto.edad)
})