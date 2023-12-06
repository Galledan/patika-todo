import React from "react";

function Main({ todos, deleteTodo }) {
  return (
    <section class="main">
      <input class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>

      <ul class="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{todo.text}</label>
              <button
                className="destroy"
                onClick={() => deleteTodo(todo.id)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Main;
