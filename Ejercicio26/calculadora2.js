var numeros = document.querySelectorAll('.number')
var operadores = document.querySelectorAll('.operator')
var igual = document.getElementById('igual')
var resultado = document.getElementById('resultado')
var numero1
var numero2
var operador
var resultadoOperacion = 0

numeros.forEach(elemento => {
    elemento.addEventListener('click', function () {
        if (numero1 == undefined) {
            numero1 = elemento.value
        } else {
            numero2 = elemento.value
        }
        resultado.innerHTML = elemento.value
    })
})

operadores.forEach(elemento => {
    elemento.addEventListener('click', function () {
        operador = elemento.value
    })
})

igual.addEventListener('click', function () {
    if (numero1 == undefined) {
        resultado.innerHTML = resultadoOperacion
    } else {
        switch (operador) {
            case '+':
                resultadoOperacion = parseInt(numero1) + parseInt(numero2)
                break;
            case '-':
                resultadoOperacion = parseInt(numero1) - parseInt(numero2)
                break;
            case 'X':
                resultadoOperacion = parseInt(numero1) * parseInt(numero2)
                break;
            case '/':
                resultadoOperacion = parseInt(numero1) / parseInt(numero2)
                break;
        }
        numero1 = undefined
        resultado.innerHTML = resultadoOperacion
    }
})