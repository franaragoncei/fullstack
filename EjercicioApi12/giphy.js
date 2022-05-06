var contenedor = document.getElementById('contenedor')
var boton = document.getElementById('boton')
var numero = document.getElementById('numero')

boton.addEventListener('click', function () {
    contenedor.innerHTML = ''
    fetch('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=ZYIM0w5WOrtl75DuSGBQHwl8VR1GqR7r&limit=' + numero.value)
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos);
            datos.data.forEach(element => {
                console.log(element.url);
                contenedor.innerHTML += (
                    '<img src="' + element.images.original.url + '">'
                )
            });
        })
})