import { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import Todos from './Components/Todos';
import Buttons from './Components/Buttons';

function App() {
  const [todoState, setTodoState] = useState([{ text: "Create a todo", id: 0, status: 'active' }, { text: "Click to mark as done", id: 1, status: 'active' }, { text: "Click the X to delete", id: 2, status: 'active' }])
  const [renderedTodos, setRenderedTodos] = useState(todoState)

  return (
    <>
      <div className='title'>todos</div>
      <Input todoState={todoState} setTodoState={setTodoState} setRenderedTodos={setRenderedTodos}/>
      <div className='todo-list'>
        <Todos todoState={renderedTodos} setTodoState={setRenderedTodos} />
        <Buttons todoState={todoState} setTodoState={setTodoState} renderedTodos={renderedTodos} setRenderedTodos={setRenderedTodos} />
      </div>

    </>
  );
}

export default App;
