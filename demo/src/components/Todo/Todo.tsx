import React, { FC } from 'react'
import { Store } from '../../store'

export const Todo: FC<{ todo: string }> = ({ todo }) => {
    const removeTodo = () => {
        Store.todoList.broadcast([...Store.todoList.value.filter(_ => _ !== todo)])
    }
    return (
        <li>
            {todo}
            <button onClick={removeTodo}>Remove Todo</button>
        </li>
    )
}
