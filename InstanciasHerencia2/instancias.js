function Soporte(){
    this.titulo = '---',
    this.numero = '---',
    this.precio = '---',
    this.mensaje = 'El título es ' + this.titulo
}

function Cinta_video(){
    this.duracion = '---'
}

Cinta_video.prototype = new Soporte

function Dvd(){
    this.idiomas_disponibles = [],
    this.formato_pantalla = []
}

Dvd.prototype = new Soporte

function Juego(){
    this.consola = '---',
    this.min_num_jug = '---',
    this.max_num_jug = '---'
}

Juego.prototype = new Soporte

var miCinta = new Cinta_video

miCinta.titulo = 'El Rey León'

console.log(miCinta.titulo);

var miDvd = new Dvd

miDvd.idiomas_disponibles = ['Español', 'English']

console.log(miDvd.idiomas_disponibles);