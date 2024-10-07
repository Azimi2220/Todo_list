import React, { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo, updateTodo } = useContext(TodoContext);
  const [isVisible, setVisible] = useState(false);
  const [value, setValue] = useState(todo.text);

  const handleUpdateTodo = (e) => {
    e.preventDefault();
    updateTodo(todo.id, value);
    setVisible(false);
    console.log(todo);
  };

  return (
    <li className="flex items-center bg-amber-400 gap-3 max-w-sm mx-auto mt-7 justify-between px-4 py-2 rounded-md">
      {isVisible ? (
        <form onSubmit={handleUpdateTodo}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="rounded-md px-4 border">Update</button>
        </form>
      ) : (
        <div className="flex items-center gap-x-2">
          <h2>{todo.text}</h2>
          <button
            onClick={() => setVisible(true)}
            className="bg-green-500 p-2 text-black rounded-md w-32"
          >
            Edit
          </button>
        </div>
      )}

      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-slate-200 p-2 rounded-md text-black"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
