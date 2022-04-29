var misEquipos = ['Real Madrid', 'Betis', 'Sevilla', 'Rayo Vallecano', 'Getafe SAD', 'Málaga', 'Cádiz CF', 'Atlético de Madrid', 'FC Barcelona']

for (let i = 0; i < misEquipos.length; i++) {
    document.getElementById('liga').innerHTML += '<li>' + misEquipos[i] + '</li>'
}