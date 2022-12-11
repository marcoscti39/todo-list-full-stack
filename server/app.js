const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Todos = require("./models/todoModel");
require("dotenv").config();
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/get-todos", async (request, response) => {
  response.json(await Todos.find());
});

app.post("/post-todos", async (request, response) => {
  await Todos.create(request.body);
  response.status(200);
  response.json({ message: "Todo Registered!" });
});

app.delete("/delete-todo/:todoID", async (request, response) => {
  const { todoID } = request.params;
  await Todos.deleteOne({ _id: todoID });
  response.status(200);
  response.json({ message: "Todo Deleted Successfully" });
});

app.get("/get-specific-todo/:todoID", async (request, response) => {
  const { todoID } = request.params;
  response.json(await Todos.findOne({ _id: todoID }));
});

app.put("/update-todo/:todoID", async (request, response) => {
  const { todoID } = request.params;
  console.log(request.body);
  await Todos.updateOne({ _id: todoID }, request.body);
});

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`you're listen on port ${PORT} `);
});
