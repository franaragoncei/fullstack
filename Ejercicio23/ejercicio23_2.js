var respuesta = document.getElementById('respuesta')

for (let i = 1; i <= 100; i+=2) {
    respuesta.innerHTML += '<p>' + i + '</p>'
}