import React from "react";
import { Route, Routes } from "react-router-dom";
import EditTodo from "./pages/EditTodo";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit-todo/:todoID" element={<EditTodo />} />
      </Routes>
    </>
  );
};

export default App;
