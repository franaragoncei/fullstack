var miVariable = 'Hola mundo'
var numero1 = 10
var numero2 = 3
var suma = numero1 + numero2
var resta = numero1 - numero2
var multiplicar = numero1 * numero2
var dividir = numero1 / numero2
var modulo = numero1 % numero2
// MUESTRO EL RESULTADO POR CONSOLA
// console.log(miVariable)
// console.log(suma);
// console.log(resta);
// console.log(multiplicar);
// console.log(dividir);
// console.log(modulo);
// OBTENER ELEMENTOS DEL HTML
var miBoton = document.getElementById('boton')
// console.log(miBoton);
miBoton.addEventListener('click', function(){
    // AQUI IRÁ LO QUE QUEREMOS QUE HAGA AL PASAR EL EVENTO
    console.log('click');
    alert('hola!')
    document.getElementById('suma').innerHTML = suma
})