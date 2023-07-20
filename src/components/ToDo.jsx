import React from "react";

const ToDo = ({ todoData, todoDeleteHandler, toggleCompleteHandler }) => {
  return (
    <section className="add-todo">
      <input
        type="checkbox"
        checked={todoData.completed}
        onChange={() => toggleCompleteHandler(todoData.id)}
      />
      <button onClick={todoDeleteHandler}> Delete</button>
      <p className={todoData.completed ? "completed" : "incomplete"}>
        {todoData.text}
      </p>
    </section>
  );
};

export default ToDo;
