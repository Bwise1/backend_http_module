const mongoose = require("mongoose");

const recipesSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  ingredients: {
    required: true,
    type: [String],
  },
  instructions: {
    required: true,
    type: [String],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
});

module.exports = mongoose.model("Recipes", recipesSchema);
