const express = require("express");

const authRouter = express.Router();
const Users = require("../models/user");

authRouter.post("/login", (req, res) => {
  //uses jwtwebtoken for auth
  console.log(req.body);
});

authRouter.post("/register", async (req, res) => {
  const user = req.body;

  //check if a user with the email already exist
  //hash password
  const newUser = new Users(user);

  const response = await newUser.save();

  console.log(response);
});

module.exports = authRouter;
