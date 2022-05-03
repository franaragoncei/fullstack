fetch('https://rickandmortyapi.com/api/character')
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos);
        datos.results.forEach(element => {
            document.getElementById('personajes').innerHTML += (
                '<article>' +
                '<div id="imagen">' +
                '<img src="'+element.image+'">' +
                '</div>' +
                '<div id="datos">' +
                '<h2 id="nombre">'+element.name+'</h2>' +
                '<h4 id="estado">'+element.status+'</h4>' +
                '<p>Última localización</p>' +
                '<h4 id="ultimaLocalizacion">'+element.location.name+'</h4>' +
                '<p>Primera vez visto</p>' +
                '<h4 id="primeraVez">'+element.origin.name+'</h4>' +
                '</div>' +
                '</article>'
            )
        });
    })