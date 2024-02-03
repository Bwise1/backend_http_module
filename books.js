const http = require("http");
const fs = require("fs");

let books = [];
const server = http.createServer((req, res) => {
  //   fs.readFile("books.json", "utf8", function (err, data) {
  //     if (err) {
  //       res.writeHead(500, { "Content-Type": "application/json" });
  //       res.end({ error: true, message: err });
  //     }

  if (req.url === "/books") {
    //GET METHOD
    if (req.method === "GET") {
      var data = fs.readFileSync("books.json", "utf8");

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
      // res.end();
    }
    //POST METHOD
    else if (req.method === "POST") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        // console.log(body);
        books.push(body);
        res.end("ok");
      });
      console.log(books);
      //   res.end();
    } else {
      res.writeHead(405, { "Content-Type": "text/plain" });
      res.end("Method not allowed");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

const port = 5001;
server.listen(port, () => {
  console.log(`server runing on port ${port}`);
});
