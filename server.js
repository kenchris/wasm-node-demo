const Module = require("./a.out.js");

const express = require("express");
const app = express();

app.get('/', async (req, res) => {
  console.log("ES!");
  let instance = await Module();
  res.send(instance._(req.query.n));
});

app.listen(8080, () => console.log("starting fib fun"));

