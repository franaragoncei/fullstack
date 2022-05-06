var boton = document.getElementById('crearCarrusel')
var contenedor = document.getElementById('contenedor')
var numeros = document.getElementById('numeros')

boton.addEventListener('click', function () {
    fetch('https://dog.ceo/api/breeds/image/random/' + numeros.value)
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos);
            datos.message.forEach(element => {
                contenedor.innerHTML += (
                    '<a href = "#" style = "width: 135px; height: 135px; opacity: 1;">' +
                    '<div class="downmosaic">' +
                    '<h4>PERRO</h4>' +
                    '</div>' +
                    '<img src="' + element + '" style="width: 135px; height: 135px;object-fit:cover;">' +
                    '</a>'
                )
            });
        })
})