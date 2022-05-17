const app = require("express")()

const usuarioController = require("../controller/usuarioController")

app.post("/login", (req, res) => {
  usuarioController.autenticar(req, res);
})

app.post("/cadastrar", (req, res) => {
  usuarioController.cadastrar(req, res);
})

module.exports = app;