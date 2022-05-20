const express = require('express')
const { miHorario } = require('./db/db')
const bodyParser = require('body-parser')
const db = require('./db/db')
const cors = require('cors')

const app = express()
app.use(cors({
    origin: true,
    methods: ['GET', 'POST'],
    credentials: true
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/api/horario', function(req, res){
    res.status(200).send({
        success: true,
        message: 'Horario obtenido con éxito',
        horario: db.miHorario
    })
})

app.post('/api/horario', function(req, res){
    if(!req.body.title){
        return res.status(400).send({
            success: false,
            message: 'Titulo obligatorio'
        })
    }else if(!req.body.description){
        return res.status(400).send({
            success: false,
            message: 'Descripcion obligatoria'
        })
    }

    const nuevaHora = {
        id: db.miHorario[db.miHorario.length-1].id + 1,
        title: req.body.title,
        description: req.body.description
    }

    db.miHorario.push(nuevaHora)

    return res.status(201).send({
        success: true,
        message: 'Nueva hora añadida',
        hora: nuevaHora
    })
})

const PORT = 8080
app.listen(PORT, function(){
    console.log('Running app in port ' + PORT);
})