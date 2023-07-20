import React, { useId, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./components.css";

const AddTodoForm = ({ addTodo, addFilterTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  // sets the new todo to the list
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;

    addTodo((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: newTodo,
        completed: false,
      },
    ]);
    addFilterTodo((prev) => prev && [
      ...prev,
      {
        id: Date.now(),
        text: newTodo,
        completed: false,
      },
    ]);

    setNewTodo("");
  };
  return (
    <form className="add-todo__form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a todo task..."
      />
      <button className="add-btn" type="submit">
        <AiOutlinePlus />
      </button>
    </form>
  );
};

export default AddTodoForm;
