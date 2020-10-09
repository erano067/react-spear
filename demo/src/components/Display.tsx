import React from 'react';
import { useSensable } from 'react-spear';
import { Store } from '../store';

export const Display = () => {
    const count = useSensable(Store.counter);
    const todos = useSensable(Store.todoList);
    return (
        <div>
            <div>Count is {count}</div>
            <div>Items in Todo is {todos.length}</div>
        </div>
    )
}
