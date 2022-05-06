var contenedor = document.getElementById('items')

fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=0Ui4HXSg1rLnjeqaoYmEsMshAxHnfa96')
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos);
        datos.results.books.forEach(element => {
            contenedor.innerHTML += (
                '<span class="slide">' +
                '<div class="content">' +
                '<div class="up">' +
                '<img src="' + element.book_image + '" class="producto pro_1">' +
                '<div class="price">' +
                '<p>30%</p>' +
                '</div>' +
                '<a target="_blank" href="' + element.amazon_product_url + '" class="button">Comprar</a>' +
                '</div>' +
                '</div>' +
                '</span>'
            )
        });
    })