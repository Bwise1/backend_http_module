const express = require("express");
const bodyParser = require("body-parser");
const {
  message,
  add,
  subtract,
  multiply,
  divide,
  readFile,
  writeFile,
} = require("./logic");

const app = express();
app.use(bodyParser.json());
const PORT = 5001;

app.get("/", (req, res) => {
  res.send(message());
});

app.post("/add", (req, res) => {
  // let result = add(3, 4);

  const { num1, num2 } = req.body;
  let result = add(num1, num2);
  let file = {
    operation: "add",
    time: new Date(),
    operands: {
      num1: num1,
      num2: num2,
    },
    result: result,
  };
  writeFile(file);
  res.status(200).send({ result: result });
});

app.post("/subtract", (req, res) => {
  const { num1, num2 } = req.body;

  let result = subtract(num1, num2);
  let file = {
    operation: "subtract",
    time: new Date(),
    operands: {
      num1: num1,
      num2: num2,
    },
    result: result,
  };
  writeFile(file);

  res.status(200).send({ result: result });
});

app.post("/multiply", (req, res) => {
  const { num1, num2 } = req.body;

  let result = multiply(num1, num2);
  res.status(200).send({ result: result });
});

app.post("/divide", (req, res) => {
  const { num1, num2 } = req.body;

  let result = divide(num1, num2);
  res.status(200).send({ result: result });
});

app.get("/history", (req, res) => {
  let history = readFile();
  res.status(200).send({ data: history });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
