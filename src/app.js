const express = require(`express`);
const morgan = require(`morgan`);
const config = require(`./config`);
const clientes = require(`./modulos/clientes/rutas`);
const error = require("./red/errors");
const app = express();


//Middelware
app.use(morgan(`dev`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configuracion
app.set(`port`, config.app.port)

//Rutas
app.use(`/api/clientes`, clientes)
app.use(error);

module.exports = app;