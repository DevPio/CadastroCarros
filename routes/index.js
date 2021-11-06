const express = require("express");

const carros = require("../carros");

const dadosC = require("../listac.json");

const rotas = express.Router();

rotas.get("/", (req, res) => {
  return res.redirect("index");
});

rotas.get("/index", (req, res) => {
  return res.render("index", { item: dadosC });
});

rotas.get("/detalhes", (req, res) => {
  return res.render("detalhes");
});

rotas.get("/index", carros.id);

rotas.get("/index/:id", carros.show);

rotas.delete("/index", carros.ex);

rotas.put("/index", carros.put);

rotas.post("/index", carros.post);

module.exports = rotas;
