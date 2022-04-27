var entrada = document.getElementById('entrada')
var boton = document.getElementById('boton')
var lista = document.getElementById('respuesta')

boton.addEventListener('click', function(){
    if(entrada.value == 'CEI'){
        alert('NO PUEDE INTRODUCIR CEI')
    }else{
        lista.innerHTML += '<li>'+entrada.value+'</li>'
    }
})