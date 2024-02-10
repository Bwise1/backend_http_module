const http = require("http");
const fs = require("fs");

let books = [];
var data = fs.readFileSync("books.json", "utf8");
books = JSON.parse(data);

const server = http.createServer((req, res) => {
  if (req.url === "/books") {
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
        fs.writeFileSync("books.json", JSON.stringify(books));
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            message: "Successfully added Book",
            data: JSON.parse(body),
          })
        );
      });

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
