import React from 'react'
import { useSensable } from 'react-spear';
import { Store } from '../store'

export const Up = () => {
    const count = useSensable(Store.counter);
    return (
        <div onClick={() => Store.counter.broadcast(count + 1)}>
            {count}
        </div>
    )
}
