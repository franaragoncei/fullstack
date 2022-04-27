// CREAMOS VARIABLES Y RECOGEMOS LOS ELEMENTOS DEL HTML
var miBotonSuma = document.getElementById('boton')
var miBotonMultiplica = document.getElementById('multiplica')
var resultadoSuma = document.getElementById('resultadoSuma')
var resultadoMultiplica = document.getElementById('resultadoMultiplica')
var span1 = document.getElementById('span1')
var span2 = document.getElementById('span2')
// CREAMOS LAS VARIABLES DE LA OPERACIÓN A REALIZAR
var numero1 = 500
var numero2 = 34
var sumaTotal = numero1 + numero2

span1.innerHTML = numero1
span2.innerHTML = numero2

// FUNCION SIN PARAMETRIZAR
function suma(){
    resultadoSuma.innerHTML = 'El total de la suma es: '
    resultadoSuma.innerHTML += sumaTotal 
    // sumaTotal = sumaTotal + sumaTotal
    sumaTotal += sumaTotal
}

function multiplica(){
}

// CREAMOS EL EVENTO Y LLAMAMOS A LA FUNCIÓN SUMA QUE VA A SER LA QUE SE EJECUTE AL REALIZARLO
miBotonSuma.addEventListener('click', suma)
miBotonMultiplica.addEventListener('click', multiplica)