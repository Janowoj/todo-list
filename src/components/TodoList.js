const TodoList = (props) => {
    return (
        <>
            <h3>Your todos:</h3>
            <ul>
                {props.list.map((todo) =>
                    <li key={todo.id}>{todo.todo}</li>
                )}
            </ul>
        </>
    )
}

export default TodoList;