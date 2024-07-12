const express = require(`express`);
const morgan = require(`morgan`);
const config = require(`./config`);
const clientes = require(`./modulos/clientes/rutas`);
const app = express();


//Middelware
app.use(morgan(`dev`));
//Configuracion
app.set(`port`, config.app.port)

//Rutas
app.use(`/api/clientes`, clientes)

module.exports = app;