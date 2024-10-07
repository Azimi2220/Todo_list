import React, { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import TodoItem from "./TodoItem";

export default function Todos() {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
