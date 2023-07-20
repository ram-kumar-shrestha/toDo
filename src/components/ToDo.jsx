import React from "react";

const ToDo = ({ todoData, todoDeleteHandler, toggleCompleteHandler }) => {
  return (
    <section className="todo-text">
      <p className={todoData.completed ? "completed" : "incomplete"}>
        {todoData.text}
      </p>

      <hr />
      <div className="actions">
        <input
          type="checkbox"
          checked={todoData.completed}
          onChange={() => toggleCompleteHandler(todoData.id)}
        />
        <button onClick={todoDeleteHandler}> Delete</button>
      </div>
    </section>
  );
};

export default ToDo;
