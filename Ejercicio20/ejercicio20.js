var suma = document.getElementById('suma')
var igual = document.getElementById('igual')
var titulo = document.getElementById('titulo')
var numeros = document.querySelectorAll('.numero')
var numero1
var numero2

numeros.forEach(elemento => {
    elemento.addEventListener('click', function(){
        if(numero1 == undefined){
            numero1 = elemento.value
        }else{
            numero2 = elemento.value
        }
        titulo.innerHTML = elemento.value
    })
})

igual.addEventListener('click', function(){
    titulo.innerHTML = parseInt(numero1) + parseInt(numero2)
    numero1 = undefined
})