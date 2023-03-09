const express = require("express");
const app = express();
$.ajax({
    accepts: {
      mycustomtype: "application/x-some-custom-type",
    },

    // Instructions for how to deserialize a `mycustomtype`
    converters: {
      "text mycustomtype": function (result) {
        // Do Stuff
        return newresult;
      },
    },

    // Expect a `mycustomtype` back from server
    dataType: "mycustomtype",
  });
  app.get("/mioNome", function (req, res) {
    let nome;
    nome = req.query.nome;
    res.send("ciao" + nome);
  });
  app.get("/somma", function (req, res) {
    res.send(JSON.stringify(req.query.a - -req.query.b));
  });

  app.get("/sottrazione", function (req, res) {
    res.send(JSON.stringify(req.query.a - req.query.b));
  });

  app.get("/divisione", function (req, res) {
    res.send(JSON.stringify(req.query.a / req.query.b));
  });

  app.get("/moltiplicazione", function (req, res) {
    res.send(JSON.stringify(req.query.a * req.query.b));
  });

  app.listen(3000);