var fruteriaArray = ['Manzanas', 'Peras', 'Uvas', 'Melocotón']
var fruteriaDIV = document.getElementById('fruteria')
var numero = 2

// BUCLE FOREACH
fruteriaArray.forEach(function(element){
    fruteriaDIV.innerHTML += '<p>'+element+'</p>'
    console.log(element);
})

// BUCLE DO WHILE
do{

}while(numero == 1)

// BUCLE WHILE
while(numero == 1){

}