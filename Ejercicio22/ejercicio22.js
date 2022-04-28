var entrada = document.getElementById('numero')
var boton = document.getElementById('btn')

boton.addEventListener('click', function () {
    document.getElementById('misNumeros').innerHTML = ''
    if (entrada.value < 5 || entrada.value > 200) {
        alert('FUERA DE RANGO')
    } else {
        for (let i = 5; i <= 200; i++) {
            if (i == entrada.value) {
                document.getElementById('misNumeros').innerHTML += '<p>ES ' + entrada.value + '</p>'
            } else {
                document.getElementById('misNumeros').innerHTML += '<p>' + i + '</p>'
            }
        }
    }

})