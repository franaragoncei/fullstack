var resultado = document.getElementById('resultado')
var parrafo = document.getElementById('parrafo')
var temporizador

resultado.addEventListener('keypress', function () {
    clearTimeout(temporizador)
    
    temporizador = setTimeout(() => {
        parrafo.innerHTML = resultado.value
    }, 3000)

    console.log('borrando');
})