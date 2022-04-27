var entrada = document.getElementById('entrada')
var boton = document.getElementById('boton')
var lista = document.getElementById('respuesta')
var lista2 = document.getElementById('respuesta2')
var miLista = []

boton.addEventListener('click', function(){
    lista2.innerHTML = ''
    miLista.push(entrada.value)
    console.log(miLista);
    // CON BUCLE FOR
    for(let i = miLista.length-1; i < miLista.length; i++){
        lista.innerHTML += '<li>'+miLista[i]+'</li>'
    }

    // CON BUCLE FOREACH
    miLista.forEach(function(elemento){
        lista2.innerHTML += '<li>'+elemento+'</li>'
    })
})