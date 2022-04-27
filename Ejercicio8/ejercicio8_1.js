var lista = document.getElementById('listaSeleccion')
// var miArray = []

function numeroElegidas(select){
    let numero = 0
    for(let i = 0; i < select.options.length; i++){
        if(select.options[i].selected){
            numero++
            lista.innerHTML += '<li>'+select.options[i].value+'</li>'
            // miArray.push(select.options[i].value)
        }
    }
    // return numero
}

document.getElementById('btn').addEventListener('click', function(){
    numeroElegidas(document.miFormulario.miSelect)
    // miArray.forEach(function(elemento){
    //     lista.innerHTML += '<li>'+elemento+'</li>'
    // })
    // alert('Numero opciones elegidas: ' + numeroElegidas(document.miFormulario.miSelect))
})