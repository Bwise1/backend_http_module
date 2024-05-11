const express = require("express");

const recipeRouter = express.Router();

recipeRouter.get("/", (req, res) => {
  console.log(req.userId);
});
module.exports = recipeRouter;
