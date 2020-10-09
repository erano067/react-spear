import React from 'react'
import { AddTodo } from './AddTodo'
import { TodoList } from './TodoList'

export const TodoManager = () => {
    return (
        <div>
            <AddTodo />
            <TodoList />
        </div>
    )
}
