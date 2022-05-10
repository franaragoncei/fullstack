function Empleado() {
    this.name = 'Trabajador'
    this.dept = 'general'
}

function Manager() {
    this.reports = []
}

Manager.prototype = new Empleado

function WorkerBee() {
    this.projects = []
}

WorkerBee.prototype = new Empleado

function SalesPerson() {
    this.dept = 'sales'
    this.quota = 100
}

SalesPerson.prototype = new WorkerBee

function Engineer() {
    this.dept = 'engineering'
    this.machina = ''
}

Engineer.prototype = new WorkerBee

var miTrabajador = new WorkerBee

// miTrabajador.name = 'Fran'
miTrabajador.mochila = 'Roja'
// miTrabajador.dept = 'Desarrollador Frontend'
miTrabajador.projects = ['CEI', 'GransLiving']

console.log(miTrabajador.dept);

var miOtroTrabajador = new SalesPerson

Empleado.prototype.edad = ''

miOtroTrabajador.edad = 23
console.log(miOtroTrabajador.name);