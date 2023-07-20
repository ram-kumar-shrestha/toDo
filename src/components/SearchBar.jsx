import React, { useState } from "react";

import { BiSearchAlt } from "react-icons/bi";
import "./components.css";

const SearchBar = ({ setSearchResults, todos }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const searchedResults = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(searchedResults);
  };
  return (
    <section className="search-todo">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Todo..."
      />
      <button className="search-btn" onClick={handleSearch}>
        <BiSearchAlt />
      </button>
    </section>
  );
};

export default SearchBar;
