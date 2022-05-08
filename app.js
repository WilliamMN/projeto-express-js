const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "view")));

app.use(cors())

const indexRouter = require("./src/router/indexRouter")
const usuarioRouter = require("./src/router/usuarioRouter")
const dashboardRouter = require("./src/router/dashboardRouter")

app.use("/", indexRouter)
app.use("/usuarios", usuarioRouter)
app.use("/dashboards", dashboardRouter)

app.listen(process.env.PORTA, () => {
  console.log(`Aplicação rodando no ambiente de ${process.env.AMBIENTE} em  http://localhost:${process.env.PORTA}/`);
})
