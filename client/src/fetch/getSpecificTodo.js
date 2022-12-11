export const getSpecificTodo = async (todoID) => {
  const response = await fetch(
    `http://localhost:3000/get-specific-todo/${todoID}`
  );
  const data = await response.json();
  return data;
};
