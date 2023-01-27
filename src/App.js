import React, {useState, useEffect} from 'react';
import "./App.css";
import Form from './components/Form';
import Todolist from './components/Todolist';
 

const App = () => {



  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    
  })

  return (
    <div className="container">
      <div className="app-container">
        <h1>To-Do List</h1>
        <div>
          <Form
             input={input}
             setInput={setInput}
             todos={todos}
             setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}
          /></div>
           <div>
          <Todolist todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}
          />
          </div>

        
      </div>
    </div>
  );
}

export default App