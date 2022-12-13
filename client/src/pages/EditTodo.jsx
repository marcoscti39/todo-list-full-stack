import React, { useEffect, useRef } from "react";
import { useMutation } from "react-query";
import { Link, useParams } from "react-router-dom";
import { updateTodo } from "../fetch/updateTodo";
import { useGetSpecificTodo } from "../hooks/useGetSpecificTodo";

const EditTodo = () => {
  const { todoID } = useParams();
  const { data, isLoading } = useGetSpecificTodo(todoID);

  const mutationUpdateTodo = useMutation(updateTodo, {
    onMutate: (variables) => console.log(variables),
  });

  const inputNameRef = useRef(null);
  const isCompletedCheckBoxRef = useRef(null);

  useEffect(() => {
    if (!isLoading) {
      inputNameRef.current.value = data?.name || "";
      isCompletedCheckBoxRef.current.checked = data?.isCompleted || false;
    }
  }, [data]);

  const handleUpdateTodo = (event) => {
    event.preventDefault();
    if (!inputNameRef.current) return;
    const updatedTodo = {
      name: inputNameRef.current.value,
      isCompleted: isCompletedCheckBoxRef.current.checked,
    };

    mutationUpdateTodo.mutate({ todoID, updatedTodo });
  };
  return (
    <section className="edit-section">
      <header className="header-todo">
        <h1 className="title">Edit Todo</h1>
        <form className="edit-form">
          <div className="inline-grid">
            <span className="bold-text">Todo ID</span>
            <span className="bold-text">{todoID}</span>
          </div>
          <label className="inline-grid">
            <span className="bold-text">Name</span>
            <input type="text" className="edit-input" ref={inputNameRef} />
          </label>
          <label className="inline-grid">
            <span className="bold-text">Completed</span>
            <input
              type="checkbox"
              name=""
              id=""
              className="edit-todo-state"
              ref={isCompletedCheckBoxRef}
            />
          </label>
          <button type="submit" className="edit-btn" onClick={handleUpdateTodo}>
            {mutationUpdateTodo.isLoading ? "Loading..." : "Edit"}
          </button>
        </form>
      </header>

      <Link to="/" className="back-todo-link">
        Back To Todos
      </Link>
    </section>
  );
};

export default EditTodo;
