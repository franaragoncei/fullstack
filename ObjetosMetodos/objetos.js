var botonVer = document.getElementById('ver')
var botonEditar = document.getElementById('editar')
var nombre = document.getElementById('nombre')

var miPersona = {
    nombre: 'Fran',
    apellido: 'Aragón',
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido
    },
    set nombreCompleto(valor){
        [this.nombre, this.apellido] = valor.split(' ')
    }
}

botonVer.addEventListener('click', function(){
    alert(miPersona.nombreCompleto)
})

botonEditar.addEventListener('click', function(){
    miPersona.nombreCompleto = nombre.value
    alert(miPersona.nombreCompleto)
})