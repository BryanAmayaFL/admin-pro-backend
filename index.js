const express = require('express');
const cors = require('cors');

require('dotenv').config();

const { connectionDB } = require('./database/config');

// Creando el servidor de express
const app = express();

// Configurar CORS
app.use(cors());

// Base de datos
connectionDB();

// Rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msj: 'Hola mundo'
    });
});

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
});