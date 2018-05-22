const Module = require("./a.out.js");

const express = require("express");
const app = express();

let fib = null;
Module().then(instance => {
  fib = instance._f;
  console.log(fib(27));
});

app.get("/", async (req, res) => {
  let n = req.query.n ? req.query.n : 1;

  if (n <= 50) { n = 50 }

  let result = fib(n);

  console.log("result = " + result);
  res.send(`Fibonacci of ${n} is ${result} - calculated using WebAssembly!`);
});

app.listen(8080, () => console.log("starting fib fun"));
