var entrada = document.getElementById('nombre')
var boton = document.getElementById('btn')
var lista = document.getElementById('lista')
var misNombres = []

boton.addEventListener('click', function () {
    let nombreEncontrado = misNombres.find(elemento => elemento == entrada.value)

    if (entrada.value == '') {
        alert('El campo está vacío')
    } else if (nombreEncontrado) {
        alert('El nombre ya existe en el array')
    } else {
        misNombres.push(entrada.value)
        alert('El nombre se ha insertado')
        lista.innerHTML += '<li>' + entrada.value + '</li>'
    }
})