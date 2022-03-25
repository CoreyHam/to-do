import React from 'react'

export default function Buttons({ todoState, setTodoState, renderedTodos, setRenderedTodos }) {
    function clickHandler(type) {
        if (type == 'active') {
            console.log("active")
            let copy = [...todoState]
            setRenderedTodos(copy.filter((todo) => todo.status == 'active'))
        }
        else if (type == 'completed') {
            console.log("completed")
            let copy = [...todoState]
            setRenderedTodos(copy.filter((todo) => todo.status == 'toggled'))
        } else {
            console.log("all")
            setRenderedTodos(todoState)
            setTodoState(todoState)
        }

    }
    function clear() {
        let copy = [...todoState]
        copy.forEach((todo) => {
            if (todo.status == 'toggled') {
                todo.status = 'deleted'
            }
        })
        setTodoState(copy)
    }
    function counter() {
        return todoState.filter((todo) => todo.status == 'active').length
    }
    return (
        <div className='bottom-items'>
            <div className='counter'>items left: {counter()}</div>
            <div className='filter-buttons'>
                <button onClick={() => clickHandler('all')}>All</button>
                <button onClick={() => clickHandler('active')}>Active</button>
                <button onClick={() => clickHandler('completed')}>Completed</button>
            </div>
            <button onClick={clear} className='clear-button'>Clear Completed</button>
        </div>
    )
}
