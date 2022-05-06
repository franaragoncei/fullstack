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
                '<h2 id="nombre"><a target="_blank" href="'+element.url+'">'+element.name+'</a></h2>' +
                '<h4 id="estado">'+element.status+'</h4>' +
                '<p>Última localización</p>' +
                '<h4 id="ultimaLocalizacion"><a target="_blank" href="'+element.location.url+'">'+element.location.name+'</a></h4>' +
                '<p>Primera vez visto</p>' +
                '<h4 id="primeraVez"><a target="_blank" href="'+element.origin.url+'">'+element.origin.name+'</a></h4>' +
                '</div>' +
                '</article>'
            )
        });
    })