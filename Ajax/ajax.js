var datos = new XMLHttpRequest()
datos.open('GET', 'datos.xml')
datos.send()

console.log(datos);

document.getElementById('boton').addEventListener('click', function(){
    var persona = datos.responseXML.getElementsByTagName('NOMBRE')

    console.log(persona[0].innerHTML);

    console.log(persona);
})
