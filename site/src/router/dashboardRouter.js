const app = require("express")()

const usuarioController = require("../controller/dashboardController")

app.get("/medidas", (req, res) => {
  usuarioController.buscarMedidasDashboard(req, res);
})

module.exports = app