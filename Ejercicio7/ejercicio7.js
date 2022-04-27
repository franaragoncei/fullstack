var respuesta = document.getElementById('respuesta')
var array = ['BMW', 'Volvo', 'Seat', 'Cupra']

for(let i = 0; i < array.length; i++){
    if(i == array.length-1){
        respuesta.innerHTML += array[i]
    }else{
        respuesta.innerHTML += array[i] + ', '
    }
}