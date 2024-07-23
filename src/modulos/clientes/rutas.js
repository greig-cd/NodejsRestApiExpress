const express = require(`express`);

const respuesta = require(`../../red/respuestas`);
const controlador = require(`./controlador`);

const router = express.Router();

router.get(`/`, todos);
router.get(`/:id`, uno);
router.put(`/`, eliminar);

async function todos(req, res, next) {
    try {
        const items = await controlador.todos()
        respuesta.success(req, res, items, 200);
    } catch {
        next(err);
    }
};

async function uno(req, res, next) {
    try {
        const items = await controlador.uno(req.params.id);
        respuesta.success(req, res, items, 200);
    } catch {
        next(err);
    }
};

async function eliminar(req, res, next) {
    try {
        const items = await controlador.eliminar(req.body);
        respuesta.success(req, res, `Usuario eliminado satisfactoriamente`, 200);
    } catch {
        next(err);
    }
};

module.exports = router;