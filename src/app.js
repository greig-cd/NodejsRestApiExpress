const expres = require(`express`);
const config = require(`./config`);

const app = expres();

app.set(`port`, config.app.port)

module.exports = app;