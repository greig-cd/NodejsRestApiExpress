const express = require(`express`);

const respuesta = require(`../../red/respuestas`);
const controlador = require(`./controlador`);
const { agregar } = require("../../DB/mysql");

const router = express.Router();

router.get(`/`, todos);
router.get(`/:id`, uno);
router.get(`/`, agregar);
router.put(`/`, eliminar);

async function todos(req, res, next) {
    try {
        const items = await controlador.todos()
        respuesta.success(req, res, items, 200);
    } catch(err){
        next(err);
    }
};

async function uno(req, res, next) {
    try {
        const items = await controlador.uno(req.params.id);
        respuesta.success(req, res, items, 200);
    } catch(err){
        next(err);
    }
};

async function agregar(req, res, next) {
    try {
        const items = await controlador.agregar(req.body);
        if(req.body.id == 0){
            mensaje = 
        }
        respuesta.success(req, res, `Usuario agregado satisfactoriamente`, 200);
    } catch(err){
        next(err);
    }
};



async function eliminar(req, res, next) {
    try {
        const items = await controlador.eliminar(req.body);
        respuesta.success(req, res, `Usuario eliminado satisfactoriamente`, 200);
    } catch(err){
        next(err);
    }
};

module.exports = router;