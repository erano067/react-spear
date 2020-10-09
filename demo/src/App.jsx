import React from 'react'
import { Up } from './components/Up';
import { Down } from './components/Down';
import { Display } from './components/Display';

export const App = () => {
    return (
        <div>
            <Up />
            <Display />
            <Down />
        </div>
    )
}
