export const updateTodo = async (todoID, updatedTodo) => {
  console.log(updatedTodo);
  console.log(todoID);
  const response = await fetch(`http://localhost:3000/update-todo/${todoID}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTodo),
  });

  const data = await response.json();
  return data;
};
