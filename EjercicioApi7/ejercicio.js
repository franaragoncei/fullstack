var select = document.getElementById('libros')
var comprar = document.getElementById('comprar')
var imagen = document.getElementById('imagen')
var miArrayAUX

fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=0Ui4HXSg1rLnjeqaoYmEsMshAxHnfa96')
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos);
        miArrayAUX = datos.results.books.slice()
        datos.results.books.forEach(element => {
            select.innerHTML += '<option value="' + element.amazon_product_url + '">' + element.title + '</option>'
        });
    })

select.addEventListener('change', function () {
    comprar.innerHTML = '<a target="_blank" href="' + select.value + '">CLICA PARA COMPRAR</a>'

    miArrayAUX.forEach(element => {
        if(select.value == element.amazon_product_url){
            imagen.innerHTML = '<img src="'+element.book_image+'">'
        }
    })

})