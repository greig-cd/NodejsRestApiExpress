const express = require(`express`);
const router = express.Router();

router.get(`/`, function(rep, res){
    res.send(`Clientes OK`)
});
module.exports = router;