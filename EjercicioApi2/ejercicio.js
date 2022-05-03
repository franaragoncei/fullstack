var categoriesSelect = document.getElementById('categories')

fetch('https://api.chucknorris.io/jokes/categories')
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach(element => {
            categoriesSelect.innerHTML += '<option>' + element + '</option>'
        });
    })


categoriesSelect.addEventListener('change', function () {
    fetch('https://api.chucknorris.io/jokes/random?category=' + categoriesSelect.value)
        .then(respuesta => respuesta.json())
        .then(datos => {
            // console.log(datos);
            document.getElementById('respuesta').innerHTML = datos.value
        })
})