var resultado = document.getElementById('resultado')
var miBoton = document.getElementById('miBoton')
var miBotonParar = document.getElementById('miBotonParar')
var fecha
var temporizador

function miReloj() {
    fecha = new Date()
    let hora = fecha.getHours()
    let minutos = fecha.getMinutes()
    let segundos = fecha.getSeconds()

    if (segundos < 10) {
        segundos = '0' + segundos
    }

    if (minutos < 10) {
        minutos = '0' + minutos
    }

    if (hora < 10) {
        hora = '0' + hora
    }

    resultado.value = hora + ':' + minutos + ':' + segundos

    temporizador = setTimeout(miReloj, 1000)
}

miBoton.addEventListener('click', function () {
    miReloj()
})

miBotonParar.addEventListener('click', function () {
    clearTimeout(temporizador)
})