const fs = require("fs");

function message() {
  return "Server Running swiftly from module";
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function readFile() {
  let history = [];
  var data = fs.readFileSync("history.json", "utf8");
  history = JSON.parse(data);

  return history;
}

function writeFile(file) {
  history = readFile();
  history.push(file);
  fs.writeFileSync("history.json", JSON.stringify(history, null, 2));
}

// module.exports.message = message;
// module.exports.add = add;

module.exports = {
  message,
  add,
  subtract,
  multiply,
  divide,
  readFile,
  writeFile,
};
