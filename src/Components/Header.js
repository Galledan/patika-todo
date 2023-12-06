import React, { useState } from 'react'

function Header({ addTodo }) {

    const [todo, setTodo] = useState();

    const handleTodo = (e) => {
        e.preventDefault();

        addTodo(todo)

        setTodo('')

    }


  return (
    <header class="header">
		<h1>todos</h1>
		<form onSubmit={handleTodo}>
			<input className="new-todo" placeholder="What needs to be done?" autoFocus  value={todo} onChange={(e) => setTodo(e.target.value)}/>
		</form>
	</header>
  )
}

export default Header