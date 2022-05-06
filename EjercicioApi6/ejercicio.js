var ciudad = document.getElementById('ciudad')
var nombre = document.getElementById('nombre')
var boton = document.getElementById('miBoton')
var icono = document.getElementById('icono')

boton.addEventListener('click', function () {
    if (ciudad.value == '') {
        alert('Por favor, introduzca una ciudad')
    } else {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + ciudad.value + '&appid=2549e51db62bd39b2239a60c8b981e4f')
            .then(respuesta => respuesta.json())
            .then(datos => {
                console.log(datos);
                if (datos.cod == 404) {
                    alert('Lo sentimos, no se han encontrado coincidencias')
                } else {
                    nombre.innerHTML = datos.name
                    switch (datos.weather[0].main) {
                        case 'Clouds':
                            icono.innerHTML =
                                '<div class="icon cloudy">' +
                                '  <div class="cloud"></div>' +
                                '<div class="cloud"></div>' +
                                '</div>'
                            break;
                        case 'Thunderstorm':
                            icono.innerHTML =
                                '<div class="icon thunder-storm">' +
                                '<div class="cloud"></div>' +
                                '<div class="lightning">' +
                                '<div class="bolt"></div>' +
                                '<div class="bolt"></div>' +
                                ' </div>' +
                                '</div>'
                            break;
                        case 'Clear':
                            icono.innerHTML =
                                '<div class="icon sunny">' +
                                '<div class="sun">' +
                                '<div class="rays"></div>' +
                                '</div>' +
                                '</div>'
                            break;
                        case 'Rain':
                            icono.innerHTML =
                                '<div class="icon rainy">' +
                                ' <div class="cloud"></div>' +
                                '  <div class="rain"></div>' +
                                ' </div>'
                            break;
                        case 'Snow':
                            icono.innerHTML =
                                ' <div class="icon flurries">' +
                                '<div class="cloud"></div>' +
                                '<div class="snow">' +
                                '<div class="flake">' +
                                '</div>' +
                                ' <div class="flake"></div>' +
                                '</div>' +
                                '</div>'
                            break;
                    }
                }
            })
    }
})