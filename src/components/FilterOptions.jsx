import React from "react";

import "./components.css";

const FilterOptions = ({ setFilteredTodos, todos }) => {
  const handleFilter = (filterType) => {
    const filteredTodos = todos.filter((todo) => {
      if (filterType === "completed") return todo.completed;
      if (filterType === "incomplete") return !todo.completed;
      return todo;
    });

    setFilteredTodos(filteredTodos);
  };
  return (
    <section className="filter-todo">
      <button onClick={() => handleFilter("")}>All</button>
      <button onClick={() => handleFilter("completed")}>Completed</button>
      <button onClick={() => handleFilter("incomplete")}>Incomplete</button>
    </section>
  );
};

export default FilterOptions;
