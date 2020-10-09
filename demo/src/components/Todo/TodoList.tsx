import React from 'react'
import { useSensable } from 'react-spear'
import { Store } from '../../store'
import { Todo } from './Todo';

export const TodoList = () => {
    const todoList = useSensable(Store.todoList);
    return (
        <div>
            <ul>
                {todoList.map((todo, index) => <Todo key={index} todo={todo} />)}
            </ul>
        </div>
    )
}
