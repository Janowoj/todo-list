import { useState } from "react";

export const TodoForm = ({ onSubmit, list }) => {
    const [text, setText] = useState('');

    const handleTodo = (event) => {
        setText(event.target.value);
    }

    const handleButtonClick = () => {
        const newTodo = {
            id: list.length,
            todo: text
        }

        onSubmit([...list, newTodo]);
        setText("");
    }

    return (
        <>
            <input value={text} onChange={handleTodo} />
            <button onClick={handleButtonClick}>Add Todo</button>
        </>
    )
}



// import { useState } from "react";

// import React, { useState } from 'react';
// // import "./App.css";

// function App() {
//   const [list, setList] = useState([]);
//   const [input, setInput] = useState("");

//   const addTodo = () => {
//     const newInput = {
//       id: Math.random(),
//       todo: input
//     };
//     setList([...list, newInput]);
//     setInput("");
//     // console.log(list);

//   };

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   }


//   return (
//     <div className='App'>
//       <h1>Todo List</h1>

//       <input
//         type="text"
//         value={input}
//         onChange={handleInputChange} />
//       <button onClick={() => addTodo(input)}>Add Todo</button>
//       <div>
//         <ul>
//           {list.map((todo) => (
//             <li key={todo.id}>
//               {todo.todo}</li>
//           ))}
//         </ul>
//       </div>

//     </div>
//   )
// }

// export default App;
