var boton = document.getElementById('btn')
var resultado = document.getElementById('resultado')
var suma = 0

boton.addEventListener('click', function(){
    for(let i = 1; i <= 100; i++){
        suma = suma + i
        // suma += i
    }
    resultado.innerHTML = suma
})