const dashboardModel = require('../model/dashboardModel');
const usuarioModel = require('../model/usuarioModel');

function buscarMedidasDashboard(req, res) {

  usuarioModel.usuarioExistePeloId(req.body.idUsuario)
    .then((resultado) => {
      if (resultado.length > 0) {
        dashboardModel.medidasDashboard(req.body.idUsuario, req.body.idMaquina)
          .then((resultado) => {
            if (resultado.length > 0) {
              res.status(200).json({ medidas: resultado })
            } else {
              res.status(204).end()
            }
          }).catch((err) => {
            res.status(500).json({ mensagem: err.message })
          })
      } else {
        res.status(404).json({ message: `Usuario ${req.body.idUsuario} não encontrado.` });
      }
    })
}

module.exports = { buscarMedidasDashboard }