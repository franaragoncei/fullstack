class Forma {
    constructor() {
        this.name = '---',
        this.mensaje = 'El título es ' + this.name
    }

    gritar() {
       
        console.log('YEPA!!');
    }
}

class Cuadrado extends Forma {
    constructor(){
        super()
        console.log('Soy un cuadrado');
    }

    saludar(){
        document.getElementById('test').innerHTML = 'Hola'
    }
}

class Circulo extends Cuadrado {
    constructor(){
        super()
        console.log('Soy un círculo');
    }
}

var c1 = new Circulo()
c1.saludar()

class Triangulo extends Forma {
    constructor(){
        super()
        console.log('Soy un triángulo');
    }

    gritar() {
        console.log('YEPA 2!!');
    }
}

// var c1 = new Cuadrado()
// c1.name = 'Cuadrado Aragón'
// console.log(c1.gritar());

// var t1 = new Triangulo()

// t1.name = 'Fran'
// console.log(t1.mensaje);