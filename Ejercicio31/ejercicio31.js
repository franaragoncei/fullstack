var boton = document.getElementById('boton')
var hora = document.getElementById('hora')
var miHora

boton.addEventListener('click', function () {
    verHora()
})

function verHora() {
    miHora = new Date()
    hora.value = miHora.getHours() + ':' + miHora.getMinutes() + ':' + miHora.getSeconds()
    setTimeout(verHora, 1000);
}