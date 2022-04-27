var entrada = document.getElementById('entrada')
var boton = document.getElementById('boton')
var lista = document.getElementById('respuesta')
var miLista = []

boton.addEventListener('click', function(){
    if(entrada.value == 'CEI'){
        alert('NO PUEDE SER CEI')
    }else{
        miLista.push(entrada.value)
        console.log(miLista);
        // aqui
        lista.innerHTML += '<li>'+ miLista[miLista.length-1] +'</li>'
    }
})