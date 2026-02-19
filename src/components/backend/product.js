const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  image: String
});

module.exports = mongoose.model("Product", productSchema);
