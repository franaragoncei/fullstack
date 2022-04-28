var respuesta = document.getElementById('respuesta')
var boton = document.getElementById('btn')
var resultado = document.getElementById('resultado')

boton.addEventListener('click', function(){
    // console.log(typeof(respuesta.value))
    // console.log(respuesta.value.toLowerCase());
    switch(respuesta.value.toLowerCase()){
        case 'si':
            resultado.innerHTML = 'A la cárcel!'
            break;
        case 'no':
            resultado.innerHTML = 'A tu casa'
            break;
        default:
            resultado.innerHTML = 'La documentación'
    }
})