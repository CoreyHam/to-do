import React from 'react'

function Todos({ todoState, setTodoState }) {
  console.log("todoState", todoState)
  function handleClick(id, type) {
    console.log(todoState)
    let copy = [...todoState]

    let targetIndex = copy.findIndex(todo => todo.id == id)
    console.log("the id", id)
    console.log("the id", copy[targetIndex])
    if (type === 'delete') {
      copy[targetIndex].status = 'deleted'
    }
    if (type === 'toggle') {
      if (copy[targetIndex].status === 'active') {
        copy[targetIndex].status = 'toggled'
      } else {
        console.log("hello")
        copy[targetIndex].status = 'active'
      }
    }
    setTodoState(copy)
  }
  return (
    todoState.map((todo, i) => {
      return (
        <div key={todo.id} className={`todo ${todo.status}`}>
          <button onClick={() => handleClick(todo.id, 'toggle')}></button>
          <div>{todo.text}</div>
          <button onClick={() => handleClick(todo.id, 'delete')}></button>
        </div>
      )
    })
  )
}

export default Todos