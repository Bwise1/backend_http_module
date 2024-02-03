// const http = require("http");

// const PORT = 5001;
// const server = http.createServer((req, res) => {
//   //   console.log(req.headers);

//   res.writeHead(200, { "Content-Type": "text/plaintext" });
//   res.end("Hello world \nI am learning Backend Development");
// });

// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });

//CHRISTINE ZEMURA's Code
//importing a moodle
// const http = require("http");

// //creating a server GET REQUEST
// const server = http.createServer((req, res) => {
//   //object
//   const personData = {
//     Name: "Christine Zemura",
//     occupation: "Back-end Developer",
//     hobbies: ["Reading", "Coding", "Hiking"],
//     address: {
//       city: "Girne",
//       country: "North Cyprus",
//     },
//   };

//   //console.log(req.headers);
//   //Code request and type of content/ configured our server
//   res.writeHead(200, { "Content-Type": "application/json" });
//   //Sending our message to server
//   res.end(JSON.stringify(personData));
// });

// //serving the server on a 5001 port
// server.listen(5002, () => {
//   console.log("Server listening on port 5002");
// });

var fs = require("fs");

// reading from file with synchronous method
var books = fs.readFileSync("books.json", "utf-8");
console.log(JSON.parse(books));

// reading from file with asynchronous method
fs.readFile("text.txt", "utf8", function (err, text) {
  if (err) {
    console.log(err);
  }
  console.log(text);
});
