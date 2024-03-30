const express = require("express");
const bcrypt = require("bcrypt");

const { readFile, writeFile } = require("./utils/fileManagement");

const router = require("./controllers/AuthController");
const taskRouter = require("./controllers/TaskController");

const app = express();
const router2 = express.Router();

app.use(express.json());

// const users = readFile("./data/user.json");

// console.log(users);

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const users = readFile("./data/user.json");
  let found = false;
  let loggedInUser;
  for (let user in users) {
    if (users[user].username === username) {
      found = true;
      loggedInUser = users[user];
    }
  }

  if (!found) {
    res.status(404).json({ error: true, message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, loggedInUser.password);
  console.log("matched?", isMatch);
  if (!isMatch) {
    res
      .status(400)
      .json({ error: true, message: "Invalid username or password" });
  }
  delete loggedInUser.password;
  res
    .status(200)
    .json({ message: "logged in successfully", data: loggedInUser });
});

router2.use("/auth", router);
router2.use("/tasks", taskRouter);

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
