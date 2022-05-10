var numeros = document.querySelectorAll('.numero')
var resultado = document.getElementById('tela')
var vaciar = document.getElementById('limpar')

numeros.forEach(element => {
    element.addEventListener('click', function(){
        setTimeout(() => {
            resultado.innerHTML += element.innerHTML
        }, 3000);
    })
});

vaciar.addEventListener('click', function(){
    resultado.innerHTML = ''
})