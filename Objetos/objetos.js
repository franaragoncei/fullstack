var miCoche = new Object()
miCoche.color = 'Negro'
miCoche.anio = 1969
miCoche.motor = '300cv'
miCoche.accesorios = ['Posavasos', 'Techo Solar', 'Alfombrillas']
miCoche.ruedas = {
    numeroRuedas: 4,
    pesoRuedas: '180gramos'
}

console.log(miCoche.ruedas.pesoRuedas);

// miCoche['color']

// miCoche.motor

document.getElementById('color').innerHTML = miCoche.accesorios

var miCoche2 = {
    color: 'Blanco', 
    motor: '95cv',
    anio: 2015,
    accesorios: ['Posavasos', 'Techo Solar', 'Alfombrillas']
}

console.log(miCoche2['color'])


function Seat(colorCoche, pesoCoche, motorCoche, anioCoche){
    this.color = colorCoche
    this.peso = pesoCoche
    this.motor = motorCoche
    this.anio = anioCoche
}

var miSeat = new Seat('azul', '190gramos', '500cv', 2022)
var miSeat2 = new Seat('blanco', '190gramos', '500cv', 2022)
var miSeat3 = new Seat('rojo', '190gramos', '500cv', {'uno': 'hola', 'dos': 'hola', 'tres': 'hola'})
var miSeat4 = new Seat('negro', '190gramos', '500cv', 2022)
var miSeat5 = new Seat('amarillo', '190gramos', '500cv', 2022)

console.log(miSeat3);