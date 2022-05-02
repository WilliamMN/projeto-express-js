const usuarioService = require("../model/usuarioModel")

function autenticar(req, res) {

  if (req.body == undefined) {
    res.status(400).send("Body vazio.")
  }

  var email = req.body.email;
  var senha = req.body.senha;

  if (email == undefined) {
    res.status(400).send("Campo de email esta vazio.")
  }

  if (senha == undefined) {
    res.status(400).send("Campo de senha esta vazio.")
  }

  usuarioService.autenticar(email, senha)
    .then((resultadoService) => {
      if (resultadoService.length > 0) {
        res.status(200).json(resultadoService[0]);
      } else {
        res.status(404).send("Nenhum resultado encontrado!");
      }
    }).catch(
      function (erro) {
        console.log(erro);
        console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
        res.status(500).json("Houve um erro ao realizar a consulta!");
      }
    );
}

function cadastrar(req, res) {

  if (req.body == undefined) {
    res.status(400).send("Body vazio.")
  }

  var nome = req.body.nome;
  var email = req.body.email;
  var senha = req.body.senha;

  if (nome == undefined) {
    res.status(400).send("Campo de nome esta vazio.")
  }

  if (email == undefined) {
    res.status(400).send("Campo de email esta vazio.")
  }

  if (senha == undefined) {
    res.status(400).send("Campo de senha esta vazio.")
  }

  usuarioService.buscarUsuario(email)
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(409).json({ message: `Email ${email} já cadastrado.` });
      } else {
        usuarioService.cadastrar(nome, email, senha)
          .then(() => {
            res.status(201).send({ message: `Usuario cadastrado.` });
          }).catch(
            function (erro) {
              console.log(erro);
              console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
              res.status(500).json("Houve um erro ao realizar a consulta!");
            }
          );
      }
    }).catch(
      function (erro) {
        console.log(erro);
        console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
        res.status(500).json("Houve um erro ao realizar a consulta!");
      }
    );
}

module.exports = {
  autenticar,
  cadastrar
}