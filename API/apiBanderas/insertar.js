var boton = document.getElementById('insertar')
var nombre = document.getElementById('nombre')
var comunidadAutonoma = document.getElementById('comunidadAutonoma')
var bandera = document.getElementById('bandera')

boton.addEventListener('click', function () {
    fetch('http://localhost:8080/provincias/insertar', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: nombre.value,
                comunidadAutonoma: comunidadAutonoma.value,
                bandera: bandera.value
            })
        })
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos);
            alert(datos.message)
            location.href = '/'
        })
})