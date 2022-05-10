var resultado = document.getElementById('resultado')

var fecha = new Date()
var diaMes = fecha.getDate()
var diaSemana = ''
var mes = ''
var anio = fecha.getFullYear()
var hora = fecha.getHours()
var minutos = fecha.getMinutes()

switch (fecha.getDay()) {
    case 0:
        diaSemana = 'Domingo'
        break;
    case 1:
        diaSemana = 'Lunes'
        break;
    case 2:
        diaSemana = 'Martes'
        break;
    case 3:
        diaSemana = 'Miercoles'
        break;
    case 4:
        diaSemana = 'Jueves'
        break;
    case 5:
        diaSemana = 'Viernes'
        break;
    case 6:
        diaSemana = 'Sábado'
        break;
}

switch (fecha.getMonth()) {
    case 0:
        mes = 'Enero'
        break;
    case 1:
        mes = 'Febrero'
        break;
    case 2:
        mes = 'Marzo'
        break;
    case 3:
        mes = 'Abril'
        break;
    case 4:
        mes = 'Mayo'
        break;
    case 5:
        mes = 'Junio'
        break;
    case 6:
        mes = 'Julio'
        break;
    case 7:
        mes = 'Agosto'
        break;
    case 8:
        mes = 'Septiembre'
        break;
    case 9:
        mes = 'Octubre'
        break;
    case 10:
        mes = 'Noviembre'
        break;
    case 11:
        mes = 'Diciembre'
        break;
}

resultado.innerHTML = 'Hoy es ' + diaSemana + ', ' + diaMes + ' de ' + mes + ' de ' + anio + ' y son las ' + hora + ':' + minutos + ' horas.'