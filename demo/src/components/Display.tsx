import React from 'react';
import { useSensable } from 'react-spear';
import { Store } from '../store';

export const Display = () => {
    const count = useSensable(Store.counter);
    return (
        <div>
            {count}
        </div>
    )
}
