const express = require("express");

const { readFile, writeFile } = require("./utils/fileManagement");

const router = require("./controllers/AuthController");

const app = express();
const router2 = express.Router();

app.use(express.json());

const users = readFile("./data/user.json");

console.log(users);

router2.use("/auth", router);

app.use(router2);

/*Middleware sample */
// app.use("/user/:id", (req, res, next) => {
//   console.log("Request Type: ", req.method);

//   next();
// });

// app.get("/user/:id", (req, res) => {
//   console.log(req.body);
//   res.sendStatus(200);
// });

//returnin json for not found routes

app.use("*", (req, res) => {
  res.status(404).json({ error: "this route does not exist" });
});

app.listen(5001, () => {
  console.log("app listening on port 5001");
});
