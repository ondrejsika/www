const express = require("express");
const getCal = require("./generator.js");

const app = express();
const port = 3047;

app.get("/", (req, res) => {
  res.type("text/html");
  res.send(`
  <a href="/all-training.ics">all-training.ics</a>
  `);
});

app.get("/all-training.ics", (req, res) => {
  res.type("text/calendar");
  res.send(getCal());
});

app.listen(port, () =>
  console.log(`Example app listening on http://0.0.0.0:${port}!`)
);
