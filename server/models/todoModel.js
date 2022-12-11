const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  name: String,
  isCompleted: Boolean,
});

const Todos = mongoose.model("todo", todoSchema);

module.exports = Todos;
