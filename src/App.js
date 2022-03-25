import { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import Todos from './Components/Todos';

function App() {
  const [todoState, setTodoState] = useState([{ text: "Create a todo", id: 0, status: 'active' }, { text: "Click to mark as done", id: 1, status: 'active' }, { text: "Click the X to delete", id: 2, status: 'active' }])

  return (
    <>
      <div className='title'>todos</div>
      <Input todoState={todoState} setTodoState={setTodoState} />
      <div className='todo-list'>
        <Todos todoState={todoState} setTodoState={setTodoState} />
      </div>

    </>
  );
}

export default App;
