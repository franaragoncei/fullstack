var boton = document.getElementById('insertarPelicula')

boton.addEventListener('click', function () {
    fetch('http://localhost:8080/videoclub/insertar', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            titulo: document.getElementById('titulo').value,
            descripcion: document.getElementById('description').value,
            year: document.getElementById('year').value,
            caratula: document.getElementById('caratula').value
        })
    })
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos);
        document.getElementById('respuesta').innerHTML = datos.message
    })
})