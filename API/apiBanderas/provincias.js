var boton = document.getElementById('verProvincias')
var contenedor = document.getElementById('contenedor')

boton.addEventListener('click', function () {
    fetch('http://localhost:8080/provincias')
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos);
            datos.provincias.map(element => {
                contenedor.innerHTML += (
                    '<div class="provincia">' +
                    '<div class="bandera">' +
                    '<img src="' + element.bandera + '" alt="Bandera de ' + element.nombre + '">' +
                    '</div>' +
                    '<div>' +
                    '<h3>' + element.nombre + '</h3>' +
                    '<h4>' + element.comunidadAutonoma + '</h4>' +
                    '</div>' +
                    '</div>'
                )
            })
        })

})