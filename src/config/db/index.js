const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/f8_nodejs");
    console.log("connect mongodb successfully");
  } catch (error) {
    console.log("connect mongodb failed");
  }
}

module.exports = { connect };
