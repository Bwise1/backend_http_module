const express = require("express");
const Recipes = require("../models/recipe");

const recipeRouter = express.Router();

recipeRouter.get("/", async (req, res) => {
  const userId = req.userId;

  try {
    const recipe = await Recipes.find({ owner: userId });
    console.log("recipe", recipe);
    res.send({
      message: "recipe returned successfully",
      recipe: recipe,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: true, message: "Internal Server error" });
  }
});

recipeRouter.post("/", async (req, res) => {
  const recipe = req.body;

  try {
    recipe.owner = req.userId;

    const newRecipe = new Recipes(recipe);
    const response = await newRecipe.save();
    if (response) {
      res.status(201).send({ message: "recipe created successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: true, message: "Internal Server error" });
  }
});

recipeRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const userId = req.userId;

  try {
    const recipe = await Recipes.findOne({ _id: id, owner: userId });
    if (recipe) {
      res.status(201).send({ message: "recipe returned successfully", recipe });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: true, message: "Internal Server error" });
  }
});
module.exports = recipeRouter;
