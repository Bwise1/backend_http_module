const fs = require("fs");

function readFile(fileName) {
  try {
    let data = [];
    var Rawdata = fs.readFileSync(fileName, "utf8");
    data = JSON.parse(Rawdata);

    return data;
  } catch (error) {
    throw error;
  }
}

function writeFile(fileName, newData) {
  try {
    let rawData = readFile(fileName);
    rawData.push(newData);
    fs.writeFileSync(fileName, JSON.stringify(rawData, null, 2));
  } catch (error) {
    throw error;
  }
}

module.exports = {
  readFile,
  writeFile,
};
