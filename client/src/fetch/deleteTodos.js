export const deleteTodos = async (todoID) => {
  const response = await fetch(`http://localhost:3000/delete-todo/${todoID}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
