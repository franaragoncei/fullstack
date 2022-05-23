// CREAMOS LAS CONSTANTES PARA TODOS LOS MODULOS
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./DB/db')

// INICIAMOS LA APP CON EL MODULO EXPRESS, PERMITE PETICIONES HTTP
const app = express()

// INDICAMOS QUE PARSEE LOS DATOS RECIBIDOS DEL BODY A JSON
app.use(bodyParser.json())

// CODIFICAMOS LOS DATOS QUE LE PASAMOS DEL BODY
app.use(bodyParser.urlencoded({
    extended: false
}))

// PERMITIMOS QUE NUESTRA APP PERMITA CORS EN LOS MÉTODOS INDICADOS
app.use(cors({
    origin: true,
    methods: ['GET', 'POST'],
    credentials: true
}))

app.get('/', function () {
    console.log('Working');
})

// CREAMOS API CON MÉTODO GET PARA MANDAR LAS PELÍCULAS DE NUESTRA "BASE DE DATOS"
app.get('/videoclub', function (req, res) {
    res.status(200).send({
        success: true,
        message: 'Obteniendo peliculas del videoclub...',
        films: db.videoclubDB
    })
})

// CREAMOS API CON MÉTODO POST PARA INSERTAR PELÍCULAS A NUESTRA "BASE DE DATOS"
app.post('/videoclub/insertar', function (req, res) {
    // CREO LAS CONDICIONES PARA LOS POSIBLES ERRORES
    if (!req.body.titulo) {
        return res.status(400).send({
            success: false,
            message: 'El título es obligatorio'
        })
    } else if (!req.body.descripcion) {
        return res.status(400).send({
            success: false,
            message: 'La descripción es obligatoria'
        })
    } else if (!req.body.caratula) {
        return res.status(400).send({
            success: false,
            message: 'La carátula es obligatoria'
        })
    }

    // CREAMOS LA NUEVA PELÍCULA A INSERTAR
    const film = {
        // ID AUTO INCREMENT
        id: db.videoclubDB[db.videoclubDB.length - 1].id + 1,
        titulo: req.body.titulo,
        description: req.body.descripcion,
        year: req.body.year,
        caratula: req.body.caratula
    }

    // AÑADIMOS AL ARRAY LA NUEVA PELICULA
    db.videoclubDB.push(film)

    // DEVOLVEMOS AL USUARIO QUE TODO HA IDO BIEN Y AL NAVEGADOR UN CÓDIGO 201 (SE HA CREADO CON ÉXITO)
    return res.status(201).send({
        success: true,
        message: 'Película añadida con éxito',
        pelicula: film
    })
})

// CREAMOS UN PUERTO Y LE INDICAMOS A LA APP QUE ESCUCHE A TRAVÉS DE ÉL
const PORT = 8080

app.listen(PORT, function () {
    console.log('Running in port ' + PORT);
})