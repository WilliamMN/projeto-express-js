const mysql = require('mysql2')

const mySqlConfig = {
  host: "0.0.0.0",
  user: "root",
  database: "api",
  password: "william",
};

function executar(instrucao) {
  if (process.env.AMBIENTE == "dev") {
    return new Promise(function (resolve, reject) {
      var conexao = mysql.createConnection(mySqlConfig);
      conexao.connect();
      conexao.query(instrucao, function (erro, resultados) {
        conexao.end();
        if (erro) {
          reject(erro);
        }
        resolve(resultados);
      });
      conexao.on('error', function (erro) {
        return ("ERRO NO MySQL WORKBENCH (Local): ", erro.sqlMessage);
      });
    });
  } else {
    return new Promise(function (resolve, reject) {
      console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
      reject("AMBIENTE NÃO CONFIGURADO EM app.js")
    });
  }
}

module.exports = {executar}