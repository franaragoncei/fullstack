var miBoton = document.getElementById('miBoton')
var respuesta = document.getElementById('respuesta')

miBoton.addEventListener('click', function(){

    function mensaje(){
        respuesta.innerHTML = 'Han pasado dos segundos'
    }
    setTimeout(mensaje, 2000);
})