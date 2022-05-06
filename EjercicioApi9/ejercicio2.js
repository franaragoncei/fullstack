var select = document.getElementById('pokemon')
var enlace = document.getElementById('enlace')
var contenedorSelect = document.getElementById('select2')

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(respuesta => respuesta.json())
    .then(datos => {
        // console.log(datos);
        datos.results.forEach(element => {
            select.innerHTML += '<option value="' + element.url + '">' + element.name + '</option>'

        });
        misMovimientos()
    })

select.addEventListener('change', function () {
    misMovimientos()
})

function misMovimientos() {
    enlace.href = select.value
    fetch(select.value)
        .then(respuesta => respuesta.json())
        .then(datos => {
            // console.log(datos);
            let misOptions
            datos.moves.forEach(element => {
                misOptions += '<option>' + element.move.name + '</option>'
            })
            contenedorSelect.innerHTML = (
                '<select>' +
                misOptions +
                '</select>'
            )
        })
}