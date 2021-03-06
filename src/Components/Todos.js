import React from 'react'
import { Circle, XCircle } from 'react-bootstrap-icons'
function Todos({ todoState, setTodoState }) {
  // console.log("todoState", todoState)
  function handleClick(id, type) {
    let copy = [...todoState]

    let targetIndex = copy.findIndex(todo => todo.id == id)
    if (type === 'delete') {
      copy[targetIndex].status = 'deleted'
    }
    if (type === 'toggle') {
      if (copy[targetIndex].status === 'active') {
        copy[targetIndex].status = 'toggled'
      } else {
        copy[targetIndex].status = 'active'
      }
    }
    setTodoState(copy)
  }
  return (
    todoState.map((todo, i) => {
      return (
        <div key={todo.id} className={`todo ${todo.status}`}>
          <a onClick={() => handleClick(todo.id, 'toggle')}><Circle /></a>
          <div>{todo.text}</div>
          <a className='unstyle' onClick={() => handleClick(todo.id, 'delete')}><XCircle /></a>
        </div>
      )
    })
  )
}

export default Todos