var boton = document.getElementById('verPelis')
var contenedorCartelera = document.getElementById('cartelera')

boton.addEventListener('click', function () {
    fetch('http://localhost:8080/videoclub')
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos);
            datos.films.map(element => {
                contenedorCartelera.innerHTML += (
                    '<div class="pelicula">' +
                    '<div class="imagen"><img src="' + element.caratula + '"></div>' +
                    '<h3>' + element.titulo + '</h3>' +
                    '<p>' + element.description + '</p>' +
                    '</div>'
                )
            });
        })
})