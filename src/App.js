import React, { useState } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import "./App.css"

function App() {

    const [id, setId] = useState(6)
    const [todos, setTodos] = useState([
        {
            "id": 0,
            "done": true,
            "text": "Taste JavaScript"
        },
        {
            "id": 1,
            "text": "Code furiously",
            "done": true
        },
        {
            "id": 2,
            "text": "Promote Mavo",
            "done": false
        },
        {
            "id": 3,
            "text": "Give talks",
            "done": false
        },
        {
            "id": 4,
            "text": "Write tutorials",
            "done": true
        },
        {
            "id": 5,
            "text": "Have a life!",
            "done": false
        }
    ]);
    
      const addTodo = (newTodo) => {
        setTodos([...todos, {id: id, text: newTodo, completed: false }]);
        setId(1);
      };

      const deleteTodo = (todoId) => {
        const updatedTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(updatedTodos);
      };

  return (
    <div className='todoapp'>
        <Header  addTodo={addTodo}/>
        <Main todos={todos} deleteTodo={deleteTodo} />
        <Footer />
    </div>
  )
}

export default App