var miBoton = document.getElementById('miBoton')
var miTabla = document.getElementById('miTabla')

var datos = new XMLHttpRequest()
datos.open('GET', 'cd_catalog.xml')
datos.send()

miBoton.addEventListener('click', function () {
    miTabla.innerHTML = (
        '<tr>' +
        '<th>Artista</th>' +
        '<th>Título</th>' +
        '</tr>'
    )
    let cd = datos.responseXML.getElementsByTagName('CD')
    let artista = datos.responseXML.getElementsByTagName('ARTIST')
    let titulo = datos.responseXML.getElementsByTagName('TITLE')

    for (let i = 0; i < cd.length; i++) {
        miTabla.innerHTML += (
            '<tr>' +
            '<td>' + artista[i].innerHTML + '</td>' +
            '<td>' + titulo[i].innerHTML + '</td>' +
            '</tr>'
        )
    }
})