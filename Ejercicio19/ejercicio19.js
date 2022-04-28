var numero1 = document.getElementById('btn1')
var numero2 = document.getElementById('btn2')
var titulo = document.getElementById('titulo')

numero1.addEventListener('click', function(){
    titulo.innerHTML = numero1.value
})

numero2.addEventListener('click', function(){
    titulo.innerHTML = numero2.value
})