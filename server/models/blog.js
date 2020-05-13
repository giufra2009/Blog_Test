const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  created: { type: String, required: true },
  image: { type: String, required: true },
  data: { type: Date, default: Date.now },
  testo: { type: String, required: true },
});

module.exports = mongoose.model("Blog", blogSchema);
