var entrada = document.getElementById('entrada')
var miBoton = document.getElementById('miBoton')
var respuesta = document.getElementById('respuesta')

miBoton.addEventListener('click', function () {
    if (!entrada.value) {
        alert('Introduce al menos una palabra')
    } else {
        fetch('https://api.chucknorris.io/jokes/search?query=' + entrada.value)
            .then(respuesta => respuesta.json())
            .then(datos => {
                console.log(datos);
                if (datos.total == 0) {
                    respuesta.innerHTML = '<p>Oh.. Lo sentimos, no existen coincidencias.</p>'
                } else {
                    respuesta.innerHTML = '<p>Total de coincidencias: '+datos.total+'</p>'
                    datos.result.forEach(element => {
                        respuesta.innerHTML += '<p>' + element.value + '</p>'
                    });
                }
            })
    }

})