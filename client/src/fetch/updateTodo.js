export const updateTodo = async (todoData) => {
  
  const response = await fetch(`http://localhost:3000/update-todo/${todoData.todoID}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoData.updatedTodo),
  });

  const data = await response.json();
  return data;
};
