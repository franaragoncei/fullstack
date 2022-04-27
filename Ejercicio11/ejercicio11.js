var clasificacion = ['Ana', 'Oswaldo', 'Raúl', 'Celia', 'María', 'Antonio']

clasificacion.forEach(function(elemento){
    document.getElementById('listaPrincipal').innerHTML += '<li>'+elemento+'</li>'
})

clasificacion.splice(2, 2, 'Celia', 'Raúl')
clasificacion.pop()
clasificacion.splice(1, 0, 'Roberto', 'Amaya')
clasificacion.unshift('Marta')

for(let i = 0; i < clasificacion.length; i++){
    document.getElementById('listaModificada').innerHTML += '<li>'+clasificacion[i]+'</li>'
}