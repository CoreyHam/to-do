import React from 'react'

function Todos({todoState, setTodoState}){
  console.log("todoState", todoState)
  function handleClick(id){
    console.log(todoState)
    setTodoState((todos) => {
      console.log(id)
      let targetIndex = todos.findIndex(todo => todo.id == id)
      console.log(targetIndex)
      todos[targetIndex].status = 'todo clicked'
      return[...todos]
    })
  }
  return (
    todoState.map((todo, i)=>{
      return(
        <div key={todo.id} className={todo.status}>
          <button onClick={()=> handleClick(todo.id)}></button><div>{todo.text}</div><button></button>
        </div>
      )
    })
  )
}

export default Todos