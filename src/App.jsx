import { useEffect, useState } from "react";
import ToDoList from "./components/ToDoList";
import FilterOptions from "./components/FilterOptions";
import SearchBar from "./components/SearchBar";
import AddTodoForm from "./components/AddTodoForm";

import styles from "./app.css";
function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState();

  useEffect(() => {
  }, [filteredTodos, todos]);
  return (
    <section className="app">
      <h1 className="app-title">Todo App</h1>
      <SearchBar setSearchResults={setFilteredTodos} todos={todos} />
      <FilterOptions setFilteredTodos={setFilteredTodos} todos={todos} />
      <AddTodoForm addTodo={setTodos} />
      <ToDoList todos={filteredTodos || todos} setTodos={setTodos} setFilteredTodos={setFilteredTodos} />
    </section>
  );
}

export default App;
