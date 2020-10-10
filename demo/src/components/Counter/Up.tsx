import React from 'react';
import { useSensable } from 'react-spear';
import { Store } from '../../store';

export const Up = () => {
    const count = useSensable(Store.counter);
    return (
        <button onClick={() => Store.counter.broadcast(count + 1)}>
            Up {count}
        </button>
    );
};
