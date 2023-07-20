import { useState } from "react";
import ToDoList from "./components/ToDoList";
import FilterOptions from "./components/FilterOptions";
import SearchBar from "./components/SearchBar";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState();

  return (
    <>
      <h1 className="app">Todo App</h1>
      <AddTodoForm addTodo={setTodos} />
      <FilterOptions setFilteredTodos={setFilteredTodos} todos={todos} />
      <SearchBar setSearchResults={setFilteredTodos} todos={todos} />
      <ToDoList todos={filteredTodos || todos} setTodos={setTodos} />
    </>
  );
}

export default App;
