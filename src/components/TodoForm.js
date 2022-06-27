import React, {useState, useEffect,  useRef} from 'react'
import { v4 as uuidv4 } from 'uuid'

function TodoForm(props) {
  const [input, setInput] = useState("")
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = x => {
    setInput(x.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
      id: uuidv4(),
      text: input
    })

    setInput('') //macht dass der Input nach Submit wieder geleert wird
  }

//  function handleClear() {
//   const newTodos = todo.filter(todo => !todo.isComplete)
//  } 

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='I have to do..' 
        value={input} 
        name="text" 
        className='todo-input'
        onChange={handleChange}
        ref={inputRef}
        />
      <button className='btn todo-button'>Add</button>
      <button className='btn clear-todo'>Clear</button>

    </form>

  )
}

export default TodoForm
