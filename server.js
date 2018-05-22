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

  if (n >= 46) { n = 1 }

  let result = fib(n);

  let text = `Fibonacci of ${n} is ${result} - calculated using WebAssembly! Use ?n=<value> to set value.`;
  console.log(text);
  res.send(text);
});

app.listen(8080, () => console.log("starting fib fun"));
