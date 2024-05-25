const mongoose = require("mongoose");

const recipesSchema = new mongoose.Schema({
  title: {           //"Ginger Bread"
    required: true,
    type: String,
  },
  description: {    //"Ginger Bread is a traditional Christmas treat."
    required: true,
    type: String,
  },
  ingredients: {     //["flour", "sugar", "ginger", "butter", "salt"]
    required: true,
    type: [String],
  },
  instructions: {   //["Mix all the ingredients together.", "Bake for 30 minutes."]
    required: true,
    type: [String],
  },
  owner: {          //ObjectId("5f9b7b5f1c9d440000f9d3a3")
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
});

module.exports = mongoose.model("Recipes", recipesSchema);
