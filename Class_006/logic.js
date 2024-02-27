function message() {
  return "Server Running swiftly from module";
}

function add(num1, num2) {
  return num1 + num2;
}

module.exports.message = message;
module.exports.add = add;
