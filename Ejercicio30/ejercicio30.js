var miBoton = document.getElementById('miBoton')
var respuesta = document.getElementById('respuesta')
var miPersona = {
    nombre: 'Fran',
    apellido: 'Aragón',
    get nombreCompleto() {
        return 'Nombre: ' + this.nombre + ', Apellido: ' + this.apellido
    }
}

miBoton.addEventListener('click', function () {
    setTimeout(() => {
        respuesta.innerHTML = miPersona.nombreCompleto
    }, 2000);
})