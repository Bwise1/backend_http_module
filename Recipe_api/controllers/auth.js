const express = require("express");
const bcrypt = require("bcrypt");
const authRouter = express.Router();
const Users = require("../models/user");

authRouter.post("/login", (req, res) => {
  //uses jwtwebtoken for auth
  //use Users.findOne() to check if email exists
  //compare password with bcryot func
  //sign jwt and resturn response
  console.log(req.body);
});

authRouter.post("/register", async (req, res) => {
  const user = req.body;

  //check if a user with the email already exist

  try {
    const prevUser = await Users.findOne({ email: user.email });

    if (prevUser) {
      res.status(400).send({ error: true, message: "user already registered" });
    }

    //replace plaintext password with hashed password
    user.password = await bcrypt.hash(user.password, 10);

    const newUser = new Users(user);

    const response = await newUser.save();
    if (response) {
      res.status(201).send({ message: "user registered successfully" });
    }
  } catch (error) {
    res.status(500).send({ error: true, message: error.message });
  }
});

module.exports = authRouter;
