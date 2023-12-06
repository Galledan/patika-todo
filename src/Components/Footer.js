import React from "react";

function Footer() {
  return (
    <div>
      <section>
        <footer class="footer">
          <span class="todo-count">
            <strong>2</strong>
            items left
          </span>

          <ul class="filters">
            <li>
              <a href="#/" class="selected">
                All
              </a>
            </li>
            <li>
              <a href="#/">Active</a>
            </li>
            <li>
              <a href="#/">Completed</a>
            </li>
          </ul>

          <button class="clear-completed">Clear completed</button>
        </footer>
      </section>

      <footer class="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
