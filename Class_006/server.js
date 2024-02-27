const express = require("express");
const { message, add } = require("./logic");

const app = express();

const PORT = 5001;

app.get("/", (req, res) => {
  res.send(message());
});

app.get("/add", (req, res) => {
  let result = add(3, 4);
  console.log(result);
  //   result + "";
  res.status(200).send({ result: result });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
