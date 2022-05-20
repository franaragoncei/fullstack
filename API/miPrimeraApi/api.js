var boton = document.getElementById('miBoton')
var insertar = document.getElementById('insertar')

boton.addEventListener('click', function(){
    fetch('http://localhost:8080/api/horario')
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos);
        datos.horario.forEach(element => {
            console.log(element);
            document.getElementById('parrafo').innerHTML += '<p>'+element.title+'</p>'
        });
        
    })
})

insertar.addEventListener('click', function(){
    fetch('http://localhost:8080/api/horario', 
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: document.getElementById('title').value,
            description: document.getElementById('description').value
        })
    })
    .then(resultado => resultado.json())
    .then(datos => {
        console.log(datos);
        if(datos.success == true){
            alert('Añadido con éxito')
        }
    })
})