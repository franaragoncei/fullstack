$(function () {
    var jugador
    var maquina
    var resultado

    $('#piedra').click(function () {
        jugador = 'piedra'
    })

    $('#papel').click(function () {
        jugador = 'papel'
    })

    $('#tijera').click(function () {
        jugador = 'tijera'
    })

    $('#jugar').click(function () {
        maquina = Math.floor(Math.random() * (3 - 0) + 0)

        // ASIGNO A LA MAQUINA EL VALOR DEL NÚMERO ALEATORIO SALIDO
        switch (maquina) {
            case 0:
                maquina = 'piedra'
                break;
            case 1:
                maquina = 'papel'
                break;
            case 2:
                maquina = 'tijera'
                break;
        }

        // VICTORIAS JUGADOR 1
        if (jugador == 'papel' && maquina == 'piedra') {
            resultado = 'Victoria Jugador'
        } else if (jugador == 'piedra' && maquina == 'tijera') {
            resultado = 'Victoria Jugador'
        } else if (jugador == 'tijera' && maquina == 'papel') {
            resultado = 'Victoria Jugador'
            // VICTORIAS MAQUINA
        } else if (jugador == 'piedra' && maquina == 'papel') {
            resultado = 'Victoria Máquina'
        } else if (jugador == 'tijera' && maquina == 'piedra') {
            resultado = 'Victoria Máquina'
        } else if (jugador == 'papel' && maquina == 'tijera') {
            resultado = 'Victoria Máquina'
        } else {
            // EMPATES
            resultado = 'Empate'
        }

        $('#resultado').append('<h5>El jugador ha elegido ' + jugador + ' y la máquina ha elegido ' + maquina + '. El resultado es: ' + resultado + '</h5>')

    })
})