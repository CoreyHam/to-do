import { React, useEffect, useState } from 'react'

function Input({ setRenderedTodos, todoState, setTodoState }) {
    const [value, setValue] = useState('');

    useEffect(() => {
        setValue(value);
    }, [value]);

    return (
        <input className='input' type='text' value={value} onChange={(e) => setValue(e.target.value)} onKeyUp={(e) => {
            if (e.key === 'Enter') {
                if (value !== '') {
                    setTodoState((todos) => {
                        let unique = Date.now()
                        todos.push({ text: value, id: unique, status: 'active' })
                        return [...todos]
                    })
                    setRenderedTodos(todoState)
                    setValue('')
                } 
                }
        }} ></input>
    )
}

export default Input