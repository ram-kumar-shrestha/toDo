import React from "react";
import ToDo from "./ToDo";

import "./components.css";

const ToDoList = ({ todos, setTodos, setFilteredTodos }) => {
  // toggling the status of todo
  const toggleComplete = (todoId) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
    setFilteredTodos((prev) =>
      prev?.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  // deleting the todo
  const deleteTodo = (todoId) => {
    setTodos((prev) =>
      prev.filter((todo) => (todo.id !== todoId ? todo : null))
    );
    setFilteredTodos((prev) =>
      prev?.filter((todo) => (todo.id !== todoId ? todo : null))
    );
  };

  return (
    <section className="todos-container">
      {todos?.slice().reverse()?.map((todo) => (
        <ToDo
          key={todo.id}
          todoData={todo}
          toggleCompleteHandler={toggleComplete}
          todoDeleteHandler={() => deleteTodo(todo.id)}
        />
      ))}
    </section>
  );
};

export default ToDoList;
