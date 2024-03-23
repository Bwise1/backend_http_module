const express = require("express");

const router = express.Router();

const { RegisterUser } = require("../service/AuthService");

router.post("/register", async (req, res) => {
  const user = req.body;

  //TODO: call the service layer with the body and handle register
  try {
    if (!user.email) {
      res.status(400).json({ error: "user email is required" });
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

router.post("/login", (req, res) => {
  const user = req.body;

  //TODO: call the service layer to verifer data and handle login
  console.log(user);
});

module.exports = router;
