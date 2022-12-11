export const fetchTodos = async () => {
  const response = await fetch("http://localhost:3000/get-todos");
  const data = await response.json();
  return data;
};
