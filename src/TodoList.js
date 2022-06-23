import React from 'react'
import Todo from './Todo'

export default function TodoList( {todos} ) {
  return (
    // <> is called "fragment"
    todos.map(todo => { 
      return <Todo todo={todo} />
    })
  )
}