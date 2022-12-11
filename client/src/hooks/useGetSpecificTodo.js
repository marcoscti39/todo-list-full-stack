import { useQuery } from "react-query";
import { getSpecificTodo } from "../fetch/getSpecificTodo";

export const useGetSpecificTodo = (todoID) => {
  return useQuery("specific-todo", () => getSpecificTodo(todoID));
};
