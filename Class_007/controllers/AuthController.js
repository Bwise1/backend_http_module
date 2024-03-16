const express = require("express");

const router = express.Router();

router.post("/register", (req, res) => {
  const user = req.body;

  //TODO: call the service layer with the body and handle register
  console.log(user);
});

router.post("/login", (req, res) => {
  const user = req.body;

  //TODO: call the service layer to verifer data and handle login
  console.log(user);
});

module.exports = router;
