const http = require("http");
const fs = require("fs");
const url = require("url");

let books = [];
var data = fs.readFileSync("books.json", "utf8");
books = JSON.parse(data);

const server = http.createServer((req, res) => {
  console.warn(req.url);
  // if (req.url === "/books") {
  //GET METHOD
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(books));
    // res.end();
  }

  //POST METHOD
  else if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      books.push(JSON.parse(body));
      fs.writeFileSync("books.json", JSON.stringify(books, null, 2));
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Successfully added Book",
          data: JSON.parse(body),
        })
      );
    });

    //   res.end();
  } else if (req.method === "DELETE") {
    const parsedUrl = url.parse(req.url, true);
    const id = parsedUrl.query.id;

    for (let i in books) {
      if (books[i].id === id) {
        console.log("Found");
        books.splice(i, 1);
      }
      fs.writeFileSync("books.json", JSON.stringify(books, null, 2));
    }
    res.writeHead(204);
    // console.log(books);
    res.end();
  }
  // Write your PUT logic
  else if (req.method === "PUT") {
    const parsedUrl = url.parse(req.url, true);
    const id = parsedUrl.query.id;
    console.log(id);
    let body = "";
    let found = false;

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      // books.push(JSON.parse(body));

      for (let i in books) {
        if (books[i].id === id) {
          found = true;
          books[i] = JSON.parse(body);
          fs.writeFileSync("books.json", JSON.stringify(books, null, 2));
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              message: "Successfully Edited Book",
              data: JSON.parse(body),
            })
          );
          break;
        }
      }

      if (!found) {
        console.log("book not found");
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Book with ID not found");
      }
      // console.log(books);
    });
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method not allowed");
  }
  // }
  // else {
  //   res.writeHead(404, { "Content-Type": "text/plain" });
  //   res.end("Page not found");
  // }
});

const port = 5001;
server.listen(port, () => {
  console.log(`server runing on port ${port}`);
});
