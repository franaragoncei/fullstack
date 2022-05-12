var datos = new XMLHttpRequest()
datos.open('GET', 'test.txt')
datos.send()

console.log(datos);

datos.addEventListener('load', function(){
    console.log(datos.responseText);
})

document.getElementById('boton').addEventListener('click', function(){
    // var persona = datos.responseXML.getElementsByTagName('NOMBRE')

  

    // console.log(persona[0].innerHTML);

    // console.log(persona);
})
