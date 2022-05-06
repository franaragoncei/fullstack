var select = document.getElementById('pokemon')
var enlace = document.getElementById('enlace')
var select2 = document.getElementById('select2')

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
    fetch(select.value)
        .then(respuesta => respuesta.json())
        .then(datos => {
            let movimientos
            datos.moves.forEach(element => {
                movimientos += '<option value="' + element.move.url + '">' + element.move.name + '</option>'
            })
            // console.log(datos.moves);
            select2.innerHTML += (
                '<select>' + movimientos + '</select>'
            )
        })
})