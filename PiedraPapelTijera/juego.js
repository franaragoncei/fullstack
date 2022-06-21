var array = [
    ['piedra', 'piedra'],
    ['piedra', 'piedra'],
    ['piedra', 'piedra'],
    ['piedra', 'piedra'],
    ['piedra', 'piedra'],
]

var jugador1 = 0
var jugador2 = 0
var empates = 0

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// console.log(Math.floor(Math.random() * (3 - 0) + 0));

// PAPEL - PIEDRA -> J1
// PIEDRA - TIJERA -> J1
// TIJERA - PAPEL -> J1

// PIEDRA - PAPEL -> J2
// TIJERA - PIEDRA -> J2
// PAPEL - TIJERA -> J2

// EL RESTO EMPATES

for (let i = 0; i < array.length; i++) {
    // console.log('RONDA ' + (i + 1));
    // console.log('Jugador 1: ' + array[i][0]);
    // console.log('Jugador 2: ' + array[i][1]);

    // VICTORIAS JUGADOR 1
    if (array[i][0] == 'papel' && array[i][1] == 'piedra') {
        jugador1++
    } else if (array[i][0] == 'piedra' && array[i][1] == 'tijera') {
        jugador1++
    } else if (array[i][0] == 'tijera' && array[i][1] == 'papel') {
        jugador1++
        // VICTORIAS JUGADOR 2
    } else if (array[i][0] == 'piedra' && array[i][1] == 'papel') {
        jugador2++
    } else if (array[i][0] == 'tijera' && array[i][1] == 'piedra') {
        jugador2++
    } else if (array[i][0] == 'papel' && array[i][1] == 'tijera') {
        jugador2++
    } else {
        // EMPATES
        empates++
    }
}

if (jugador1 > jugador2) {
    // alert('Jugador 1 ha ganado con ' + jugador1 + ' victorias y ' + empates + ' empates!')
} else if (jugador1 < jugador2) {
    // alert('Jugador 2 ha ganado con ' + jugador2 + ' victorias y ' + empates + ' empates!')
} else {
    // alert('EMPATE CON ' + jugador1 + ' VICTORIAS');
}