var respuesta = document.getElementById('respuesta')
var respuesta2 = document.getElementById('respuesta2')
var misDias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

misDias.forEach((elemento, indice) => {
    if (indice == misDias.length - 1) {
        respuesta.innerHTML += elemento
    } else {
        respuesta.innerHTML += elemento + ' - '
    }
})

// FILTER 
var resultado = misDias.filter(elemento => elemento.length >= 7)

var resultado = misDias.filter(function(elemento){
    return elemento.length >= 7
})

console.log(resultado);

// MAP
var numeros = [1, 5, 10, 15]

// var duplicando = numeros.map(function(elemento){
//     return elemento * 2
// })

numeros.map((elemento, indice) => {
     respuesta2.innerHTML += indice + ' - '
})


// console.log(duplicando);