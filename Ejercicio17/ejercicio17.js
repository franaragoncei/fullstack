var numero = document.getElementById('numero')
var boton = document.getElementById('btn')
var respuesta = document.getElementById('resultado')
var numeroEscogido = Math.floor(Math.random() * 100) + 1

boton.addEventListener('click', function(){
    console.log(numeroEscogido);
    if(numero.value > numeroEscogido){
        respuesta.innerHTML = 'Te pasaste'
    }else if(numero.value < numeroEscogido){
        respuesta.innerHTML = 'No has llegado'
    }else{
        respuesta.innerHTML = 'Acertaste'
        numeroEscogido = Math.floor(Math.random() * 100) + 1
    }
})