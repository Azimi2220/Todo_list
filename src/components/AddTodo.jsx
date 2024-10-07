import React, { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
  };
  return (
    <form onSubmit={handleSubmit} className=" text-center space-y-2 mt-3 ">
      <h1 className="font-serif text-xl">Fill the blanks</h1>
      <div>
        <input
          className="border-2"
          value={input}
          name="input"
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button className="bg-green-500 w-16 rounded-md ml-2">Add</button>
      </div>
      <div>
        <input
          type="text"
          value={input}
          name="onput"
          onChange={(e) => setInput(e.target.value)}
          className="border-2"
        />
        <button className="bg-green-500 w-16 rounded-md ml-2">Add</button>
      </div>
    </form>
  );
};


export default AddTodo;