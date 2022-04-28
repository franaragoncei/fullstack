var numero = document.getElementById('numero')
var boton = document.getElementById('btn')
var respuesta = document.getElementById('resultado')
var numeroEscogido = 20

boton.addEventListener('click', function(){
    if(numero.value > numeroEscogido){
        respuesta.innerHTML = 'Te pasaste'
    }else if(numero.value < numeroEscogido){
        respuesta.innerHTML = 'No has llegado'
    }else{
        respuesta.innerHTML = 'Acertaste'
    }
})