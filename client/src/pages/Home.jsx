import React, { useRef } from "react";
import { useMutation, useQueryClient } from "react-query";
import Notification from "../components/Notification";
import TodoItem from "../components/TodoItem";
import { deleteTodos } from "../fetch/deleteTodos";
import { postTodo } from "../fetch/postTodos";
import { useGetTodos } from "../hooks/useGetTodos";
import { useNotification } from "../hooks/useNotification";

const Home = () => {
  const { data: todos, isLoading } = useGetTodos();
  const { activateNotification, isNotificationShowing, notificationData } =
    useNotification();
  const inputRef = useRef(null);
  const queryClient = useQueryClient();
  const mutationPost = useMutation((todoData) => postTodo(todoData), {
    onSuccess: () => {
      queryClient.invalidateQueries("getTodos");
    },
  });

  const handleTodoSubmit = (event) => {
    event.preventDefault();

    if (inputRef?.current) {
      if (!inputRef.current.value) {
        activateNotification("fill the Input", "rejected");
        return;
      }
      const newTodo = {
        name: inputRef.current.value,
        isCompleted: false,
      };
      mutationPost.mutate(newTodo);

      activateNotification("Item Added", "fulfilled");
      inputRef.current.value = "";
      return;
    }
  };

  return (
    <section className="home-section">
      <header className="header-todo">
        <h1 className="title">Task Manager</h1>
        <form onSubmit={handleTodoSubmit} className="home-form">
          <input
            type="text"
            className="home-input"
            placeholder="e.g wash dishes"
            ref={inputRef}
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
        {isNotificationShowing && <Notification {...notificationData} />}
      </header>

      <section className="todo-container">
        {isLoading
          ? "Loading..."
          : todos?.map((todo, index) => <TodoItem key={index} {...todo} />)}
      </section>
    </section>
  );
};

export default Home;
