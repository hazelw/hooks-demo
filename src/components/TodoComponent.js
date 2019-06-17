import React, { useState } from 'react';

const TodoComponent = () => {
    const [ todos, setTodos ] = useState([]);
    const [ currentTodo, setCurrentTodo ] = useState('');

    return (
        <div>
            <div>
                {todos.map((todo) => <div key={todo.id}>{todo.text}</div>)}
            </div>
            <div>
                <textarea onChange={(e) => setCurrentTodo(e.target.value)} />
                <button onClick={
                    () => setTodos([...todos, {id: todos.length, text: currentTodo}])
                }>
                    Submit Todo
                </button>
            </div>
        </div>
    );
};

export default TodoComponent;
