import { useState } from 'react';
import { TodoForm } from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
    const [list, setList] = useState([]);


    return <div>
        <div>
            <TodoForm onSubmit={setList} list={list} />
            <TodoList list={list} />
        </div>
    </div>

}

export default App;