const app = require("express")()

app.get("/", (req, res) => {
  res.render("index")
});

app.get("/health-check", (req, res) => {
  res.send({
    message: "API esta funcionando.",
    data: new Date()
  })
});

module.exports = app;