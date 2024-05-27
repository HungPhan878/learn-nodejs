const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const slug = require("mongoose-slug-generator");

// mongoose.plugin(slug);

const Course = new Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  slug: { type: String },
  video: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", Course);
