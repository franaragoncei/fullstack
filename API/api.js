fetch('https://api.chucknorris.io/jokes/random')
.then(respuesta => respuesta.json())
.then(datos => {
    console.log(datos)
    document.getElementById('respuesta').innerHTML = datos.value

    document.getElementById('imagen').src = 'https://api.chucknorris.io/img/favicon.ico'
})