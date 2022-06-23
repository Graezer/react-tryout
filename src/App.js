import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState(['Gassi gehen', "3 Klimmzüge"])
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>

          <div className="todo">
            < TodoList todos={todos} />
            <input type="text" />
            <button className="btn btn-primary">+</button>
            <button className="btn btn-warning">clear</button>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
