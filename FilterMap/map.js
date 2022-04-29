var respuesta = document.getElementById('map')

// MAP
var numeros = [1, 5, 10, 15]

var duplicando = numeros.map(function(elemento){
    return elemento * 2
})

duplicando.forEach((elemento, indice) => {
     respuesta.innerHTML += elemento + ' - '
})