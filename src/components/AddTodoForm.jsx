import React, { useId, useState } from "react";

const AddTodoForm = ({ addTodo }) => {
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

    setNewTodo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a todo task..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
