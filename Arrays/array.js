// var fruteria = ['Manzana', 7.6, 'Peras', ['Manzana', 'Peras']]
// console.log(fruteria);
// console.log(fruteria.length);
// console.log(fruteria[2]);
// console.log(fruteria[fruteria.length-1])
// fruteria.push('Melocotón')
// console.log(fruteria);
// fruteria.pop()
// console.log(fruteria);
// fruteria.unshift('Platano')
// console.log(fruteria);
// fruteria.shift()
// console.log(fruteria);
// var posicion = fruteria.indexOf('Peras')
// console.log(posicion);
// fruteria.splice(posicion, 0, 'Melcotón')
// console.log(fruteria);
// posicion = fruteria.indexOf('Peras')
// console.log(posicion);

// CREAMOS EL ARRAY
var fruteria = ['Manzanas', 'Peras', 'Uvas', 'Melocotón']
console.log(fruteria);
// ELIMINAMOS EL ÚLTIMO ELEMENTO
fruteria.pop()
console.log(fruteria);
// AÑADIMOS UN ELEMENTO A LA ÚLTIMA POSICIÓN
fruteria.push('Platano')
console.log(fruteria);
// ELIMINAMOS EL PRIMER ELEMENTO
fruteria.shift()
console.log(fruteria);
// AÑADIMOS UN ELEMENTO A LA PRIMERA POSICIÓN
fruteria.unshift('Melocotón')
console.log(fruteria);
// AÑADIMOS EN LA POSICION DEL ELEMENTO 'UVAS' EL ELEMENTO FRESAS. SIN CONOCER LA POSICIÓN DE 'UVAS'
var posicionUvas = fruteria.indexOf('Uvas')
fruteria.splice(posicionUvas, 0, 'Fresas')
console.log(fruteria);

document.getElementById('fruta').innerHTML += fruteria[0]

// document.getElementById('fruteria').innerHTML += "<p>"+fruteria[0]+"</p>"

for (let i = 0; i < fruteria.length; i++) {
    // console.log('La i vale: ' + i);
    console.log(fruteria[i]);
    document.getElementById('fruteria').innerHTML += '<p>' + fruteria[i] + '</p>'
}

// console.log(fruteria[0]);
// console.log(fruteria[1]);
// console.log(fruteria[2]);
// console.log(fruteria[3]);
// console.log(fruteria[4]);