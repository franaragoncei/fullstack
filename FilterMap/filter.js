var respuesta = document.getElementById('filter')
var misDias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

// FILTER
// FUNCIÓN FLECHA
var resultado = misDias.filter(elemento => elemento.length >= 7)

// FUNCIÓN ANÓNIMA
var resultado = misDias.filter(function(elemento){
    return elemento.length >= 7
})

resultado.forEach(element => {
    respuesta.innerHTML += element + ' - '
});