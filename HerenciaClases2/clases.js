var botones = document.getElementById('botones')

class Vehiculo {
    constructor() {
        this.nombreVehiculo = ''
    }

    // transportar() {
    //     botones.innerHTML = '<button id="vehiculo">Vehículo</button>'
    // }

    tipos(){
        document.getElementById('acuatico').classList.remove('oculta')
        document.getElementById('aereo').classList.remove('oculta')
        document.getElementById('vehiculo').classList.add('oculta')
    }
}

class Acuatico extends Vehiculo{
    constructor(){
        super()
        this.nombreAcuatico = ''
    }

    navegar(){
        document.getElementById('barco').classList.remove('oculta')
        document.getElementById('velero').classList.remove('oculta')
        document.getElementById('acuatico').classList.add('oculta')
        document.getElementById('aereo').classList.add('oculta')
        
    }
}

class Aereo extends Vehiculo{
    constructor(){
        super()
        this.nombreAereo = ''
    }

    volar(){
        document.getElementById('avion').classList.remove('oculta')
        document.getElementById('helicoptero').classList.remove('oculta')
        document.getElementById('acuatico').classList.add('oculta')
        document.getElementById('aereo').classList.add('oculta')
    }
}

class Barco extends Acuatico{
    constructor(){
        super()
    }

    prendeMotor(){
        botones.innerHTML = '<p>Soy un barco</p>'
    }
}

class Velero extends Acuatico{
    constructor(){
        super()
    }

    izarVelas(){
        botones.innerHTML = '<p>Soy un velero</p>'
    }
}

class Avion extends Aereo{
    constructor(){
        super()
    }

    bajarTrenDeAterrizaje(){
        botones.innerHTML = '<p>Soy un avion</p>'
    }
}

class Helicoptero extends Aereo{
    constructor(){
        super()
    }

    encenderHelices(){
        botones.innerHTML = '<p>Soy un helicoptero</p>'
    }
}
var miVehiculo = new Vehiculo()
// miVehiculo.transportar()

document.getElementById('vehiculo').addEventListener('click', function(){
    miVehiculo.tipos()
})

document.getElementById('acuatico').addEventListener('click', function(){
    miVehiculo = new Acuatico()
    miVehiculo.navegar()
})

document.getElementById('aereo').addEventListener('click', function(){
    miVehiculo = new Aereo()
    miVehiculo.volar()
})

document.getElementById('barco').addEventListener('click', function(){
    miVehiculo = new Barco()
    miVehiculo.prendeMotor()
})

document.getElementById('velero').addEventListener('click', function(){
    miVehiculo = new Velero()
    miVehiculo.izarVelas()
})

document.getElementById('avion').addEventListener('click', function(){
    miVehiculo = new Avion()
    miVehiculo.bajarTrenDeAterrizaje()
})

document.getElementById('helicoptero').addEventListener('click', function(){
    miVehiculo = new Helicoptero()
    miVehiculo.encenderHelices()
})