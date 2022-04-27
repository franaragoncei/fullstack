var miArray = [5, 180, 250, 62]

var encontrado = miArray.find(elemento => elemento == 180)

var encontrado2 = miArray.find(function(element){
    return element == 3
})

if(encontrado){
    console.log('Lo ha encontrado!');
}else{
    console.log('Ohhhhh no lo ha encontrado');
}

if(encontrado2){
    console.log('Lo ha encontrado!');
}else{
    console.log('Ohhhhh no lo ha encontrado');
}