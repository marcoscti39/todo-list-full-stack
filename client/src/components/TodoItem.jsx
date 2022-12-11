import React from "react";

import { BiEdit as EditIcon } from "react-icons/bi";
import { RiDeleteBin2Fill as DeleteIcon } from "react-icons/ri";
import { HiClipboardCheck as CheckIcon } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { deleteTodos } from "../fetch/deleteTodos";

const TodoItem = ({ name, isCompleted, _id }) => {
  const queryClient = useQueryClient();

  const mutationDelete = useMutation((todoID) => deleteTodos(todoID), {
    onSuccess: () => {
      queryClient.invalidateQueries("getTodos");
    },
  });

  const handleTodoDelete = () => {
    mutationDelete.mutate(_id);
  };
  return (
    <article className="todo-item">
      <div className="todo-wrapper-align">
        <span className="todo-state">{isCompleted && <CheckIcon />}</span>
        <h2 className="todo-text">{name}</h2>
      </div>

      <div className="todo-btn-container">
        <Link
          to={`/edit-todo/${_id}`}
          className="todo-edit"
          aria-label="go to edit page"
        >
          <EditIcon />
        </Link>
        <button className="todo-delete" onClick={handleTodoDelete}>
          <DeleteIcon />
        </button>
      </div>
    </article>
  );
};

export default TodoItem;
