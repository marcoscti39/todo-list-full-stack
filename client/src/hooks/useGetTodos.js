import { useQuery } from "react-query";
import { fetchTodos } from "../fetch/fetchTodos";

export const useGetTodos = () => {
  return useQuery("getTodos", fetchTodos);
};
