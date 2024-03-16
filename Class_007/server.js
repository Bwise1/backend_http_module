const express = require("express");

const { readFile, writeFile } = require("./utils/fileManagement");

const router = require("./controllers/AuthController");

const app = express();
const router2 = express.Router();

app.use(express.json());

const users = readFile("./data/user.json");
// const newUser = {
//   id: 3,
//   name: "Wisdom",
//   email: "wisdom@greep.com",
// };

// writeFile("./data/user.json", newUser);
console.log(users);

router2.use("/auth", router);

app.use(router2);

app.listen(5001, () => {
  console.log("app listening on port 5001");
});
