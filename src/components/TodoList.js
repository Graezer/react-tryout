import React, {useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
    )
  }

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr)
  }

  const completeTodo = id => {
    let updateTodos = todos.map(todo => {
      if (todo.id === id) {
        if (todo.isComplete === false) {
          todo.isComplete = !todo.isComplete
        }
      }
      return todo
    })
    setTodos(updateTodos)
  }

  const handleClear = () => {
    const newTodos = todos.filter(todo => !todo.isComplete)
    setTodos(newTodos)
  }

  return (
    <div className='list'>
      <h2>..todays todos</h2>
      <TodoForm onSubmit={addTodo}/>
      <button className='btn btn-primary clear-todo' onClick={handleClear}>Clear</button>
      <Todo 
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <div>{todos.filter(todo => todo.className !== "complete").length} tasks left to do</div>
    </div>
  )
}

export default TodoList
