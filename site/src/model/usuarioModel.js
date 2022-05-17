const database = require("../database/configuration")

function autenticar(email, senha) {
  return database.executar(`select id, email from tb_usuario where email = '${email}' and senha = '${senha}'`)
}

function cadastrar(nome, email, senha) {
  return database.executar(`insert into tb_usuario (nome, email, senha) values ('${nome}', '${email}', '${senha}')`)
}

function buscarUsuario(email) {
  return database.executar(`select email from tb_usuario where email = '${email}'`)
}

function usuarioExistePeloId(id) {
  return database.executar(`select email from tb_usuario where id = '${id}'`)
}

module.exports = {
  autenticar,
  cadastrar,
  buscarUsuario,
  usuarioExistePeloId
}