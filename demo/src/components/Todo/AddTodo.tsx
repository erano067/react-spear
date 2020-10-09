import React, { useState } from 'react'
import { Store } from '../../store';

export const AddTodo = () => {
    const [todo, setTodo] = useState('');
    return (
        <div>
            <input value={todo} onChange={e => setTodo(e.target.value)} type="text" />
            <button onClick={() => Store.todoList.broadcast([...Store.todoList.value, todo])}>Add Todo</button>
        </div>
    )
}
