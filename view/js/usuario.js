function entrar(_email, _senha) {
  if (_email == "" || _senha == "") {
    input_email.style.border = "1px solid red"
    input_senha.style.border = "1px solid red"
    span_erro.innerHTML = "o campo email e senha estão vazios"
  } else if (_email == "") {
    input_email.style.border = "1px solid red"
    span_erro.innerHTML = "o campo email esta vazio"
  } else if (_senha == "") {
    input_senha.style.border = "1px solid red"
    span_erro.innerHTML = "o campo senha esta vazio"
  } else {
    fetch("/usuarios/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: _email,
        senha: _senha
      })
    }).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          localStorage.setItem("usuarioEmail", json.email);
          localStorage.setItem("usuarioId", json.id);

          window.location.pathname = "usuario/userprofile.html"
        })
      } else {
        span_erro.innerHTML = "Usuario não encontrado"
      }
    })
  }
}

function cadastrar(_nome, _email, _senha, senhaConfirma) {
  if (_nome == "") {
    span_erro.innerHTML = "nome esta vazio"
  } else if (_email == "") {
    span_erro.innerHTML = "email esta vazio"
  } else if (_senha == "") {
    span_erro.innerHTML = "senha esta vazio"
  } else if (senhaConfirma == "") {
    span_erro.innerHTML = "senhaConfirma esta vazio"
  } else if (senhaConfirma != _senha) {
    span_erro.innerHTML = "campos de senha diferentes"
  } else {
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome: _nome,
        email: _email,
        senha: _senha
      })
    }).then((response) => {
      if (response.status == 201) {
        window.location.pathname = "usuario/login.html";
      } else {
        span_erro.innerHTML = "não foi possivel cadastrar o usuario"
      }
    })
  }
}

function validarSessao() {
  if (localStorage.length > 0) {
    div_perfil.innerHTML = localStorage.getItem("usuarioEmail")
  } else {
    window.location.pathname = "/"
  }
}

function sair() {
  localStorage.clear();
  validarSessao()
}