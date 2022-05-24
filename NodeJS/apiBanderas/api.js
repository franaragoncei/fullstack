const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./DB/db')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(cors({
    origin: true,
    methods: ['GET', 'POST'],
    credentials: true
}))

app.get('/provincias', function (req, res) {
    res.status(200).send({
        success: true,
        message: 'Provincias obtenidas con éxito.',
        provincias: db.provinciaDB
    })
})

app.post('/provincias/insertar', function (req, res) {
    if (!req.body.nombre) {
        return res.status(400).send({
            success: false,
            message: 'Nombre de provincia obligatorio.'
        })
    } else if (!req.body.comunidadAutonoma) {
        return res.status(400).send({
            success: false,
            message: 'Comunidad Autónoma obligatoria.'
        })
    } else if (!req.body.bandera) {
        return res.status(400).send({
            success: false,
            message: 'Bandera obligatoria.'
        })
    }

    const nuevaProvincia = {
        id: db.provinciaDB[db.provinciaDB.length - 1].id + 1,
        nombre: req.body.nombre,
        comunidadAutonoma: req.body.comunidadAutonoma,
        bandera: req.body.bandera
    }

    db.provinciaDB.push(nuevaProvincia)

    return res.status(201).send({
        success: true,
        message: 'Provincia añadida con éxito.',
        provincia: nuevaProvincia
    })
})

const PORT = 8080

app.listen(PORT, function(){
    console.log('Running in port ' + PORT);
})