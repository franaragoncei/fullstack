var numero = document.getElementById('numero')
var boton = document.getElementById('btn')
var resultado = document.getElementById('resultado')
var numeroEscogido = Math.floor(Math.random() * 10) + 1
var respuestaAleatoria = Math.floor(Math.random() * 5)
var misRespuetas = ['Oh, has fallado', 'Sigue intentándolo', 'Casi lo tienes', 'Te falta poco', 'Mejor que te rindas']


boton.addEventListener('click', function () {
    console.log(numeroEscogido);

    numero.value == numeroEscogido 
    ?
        (
            resultado.innerHTML = 'Acertaste',
            numeroEscogido = Math.floor(Math.random() * 10) + 1
        )
    :
    (
        resultado.innerHTML = misRespuetas[respuestaAleatoria],
        respuestaAleatoria = Math.floor(Math.random() * 5)
    )
        
})