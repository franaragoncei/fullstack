// CREAMOS LAS VARIABLES PARA LOS BOTONES
var sumar = document.getElementById('sumar')
var restar = document.getElementById('restar')
var multiplicar = document.getElementById('multiplicar')
var dividir = document.getElementById('dividir')
var total = document.getElementById('total')
// CREAMOS LAS VARIABLES PARA AÑDIR LOS NÚMEROS
var span1 = document.getElementById('span1')
var span2 = document.getElementById('span2')
// CREAMOS LAS VARIABLES PARA ALMACENAR LOS NÚMEROS
var numero1 = 5
var numero2 = 10
// AÑADIMOS LOS NÚMEROS AL HTML
span1.innerHTML = numero1
span2.innerHTML = numero2

// CREAMOS LAS FUNCIONES QUE SE EJECUTARÁN AL HACER CLICK EN LOS DIFERENTES BOTONES
sumar.addEventListener('click', function(){
    total.innerHTML = ''
    total.innerHTML += numero1 + numero2
})

restar.addEventListener('click', function(){
    total.innerHTML = 'TOTAL: '
    total.innerHTML += numero1 - numero2
})

multiplicar.addEventListener('click', function(){
    total.innerHTML = 'TOTAL: '
    total.innerHTML += numero1 * numero2
})

dividir.addEventListener('click', function(){
    total.innerHTML = 'TOTAL: '
    total.innerHTML += numero1 / numero2
})