var select = document.getElementById('pokemon')
var enlace = document.getElementById('enlace')

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(respuesta => respuesta.json())
    .then(datos => {
        // console.log(datos);
        datos.results.forEach(element => {
            select.innerHTML += '<option value="' + element.url + '">' + element.name + '</option>'

        });
        enlace.href = select.value
    })

select.addEventListener('change', function () {
    enlace.href = select.value
})