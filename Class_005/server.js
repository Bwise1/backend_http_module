var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");

var app = express();
const port = 5001;

app.use(bodyParser.json());

let books = [];
var data = fs.readFileSync("../books.json", "utf8");
books = JSON.parse(data);

//GET BOOK
app.get("/", (req, res) => {
  res.send("Welcome to Books api v1.1");
});

// CREATE BOOK
app.post("/books", (req, res) => {
  let body = req.body;
  //   console.log(body);
  books.push(body);
  fs.writeFileSync("../books.json", JSON.stringify(books, null, 2));
  res.status(201).send({ message: "Book Created successfully", data: body });

  //add errror to return 500 internal error if unable to write to book
});

//DELETE BOOK
app.delete("/books", (req, res) => {
  const id = req.query.id;

  console.log(id);
  if (!id) {
    res.status(400).send("Id is required");
    return;
  }
  for (let i in books) {
    if (books[i].id === id) {
      console.log("Found");
      books.splice(i, 1);
    }
    fs.writeFileSync("../books.json", JSON.stringify(books, null, 2));
  }
  res.status(204).send();
});

//UPDATE BOOK
app.put("/books", (req, res) => {
  const id = req.query.id;
  let body = req.body;
  let found = false;

  console.log(id);
  if (!id) {
    res.status(400).send("Bad request");
  }
  for (let book in books) {
    if (books[book].id === id) {
      found = true;
      books[book] = body;
    }
    fs.writeFileSync("../books.json", JSON.stringify(books, null, 2));
  }

  if (!found) {
    res.status(404).send("Book not found");
    return;
  }
  res.status(200).send({ message: "Book adaded successfully", data: body });
});

//
app.listen(port, () => {
  console.log(`server runing on port ${port}`);
});
