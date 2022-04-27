var mostrar = document.getElementById('mostrar')
var ocultar = document.getElementById('ocultar')
var fruteria = document.getElementById('fruteria')
var fruteriaArray = ['Manzanas', 'Peras', 'Uvas', 'Melocotón']

mostrar.addEventListener('click', function(){
    fruteria.innerHTML = ''
    for(let i = 0; i < fruteriaArray.length; i++){
        fruteria.innerHTML += '<p>'+fruteriaArray[i]+'</p>'
    }
    
})

ocultar.addEventListener('click', function(){
    fruteria.innerHTML = ''
})