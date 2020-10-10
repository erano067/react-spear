import React from 'react'
import { Counter } from './components/Counter/Counter';
import { Display } from './components/Display';
import { TodoManager } from './components/Todo/TodoManager';

export const App = () => {
    return (
        <div>
            <Display />
            <Counter />
            <TodoManager />
        </div>
    )
}
