import React from "react";
import Todos from "../components/todos";
import AddTodo from "../components/AddTodo";

export const Home = () => {
  return (
    <div className="flex items-center flex-col mt-9 bg-slate-300">
      <AddTodo />
      <Todos />
    </div>
  );
};
