const express = require("express");

const router = express.Router();

const { RegisterUser, LoginUser } = require("../service/AuthService");

router.post("/register", async (req, res) => {
  const user = req.body;

  //TODO: call the service layer with the body and handle register
  try {
    if (!user.email || !user.password || !user.username || user.name) {
      res.status(400).json({ error: true, message: "missing required fields" });
    }
    newUser = await RegisterUser(user);
    if (newUser) {
      res
        .status(201)
        .json({ message: "registration successful", data: newUser });
    }
  } catch (error) {
    console.log(error);
    res.status(409).json({ error: error });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  //TODO: call the service layer to verifer data and handle login
  let user = await LoginUser(username, password);

  if (!user) {
    res.status(404).json({ message: "User does not exist" });
  }
  console.log(user);
  res.status(200).json({ message: "login successfully", data: user });
});

module.exports = router;
