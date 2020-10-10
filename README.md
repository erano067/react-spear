# React Spear

A new design pattern for managing states in react.

## Installation

Simply run:

```bash
# If you use npm:
npm install react-spear

# Or if you use Yarn:
yarn add react-spear
```

## Api

### Subject

- A **Subject** is a subscribable object that holds a value.

#### SessionSubject

- A **Subject** that sync with session storage.

#### LocalSubject

- A **Subject** that sync with local storage.

### useSensable

- A react hook that subscribes to some **Subject** and gives you back its _value_
  and changes it(via state update) when getting a new value.

## Usage example

You can take a look at demo folder.

If you have a counter like this:

src/Counter.(jsx/tsx)

```tsx
import React from 'react';
import { Down } from './Down';
import { Up } from './Up';
import { Display } from './Display';

export const Counter = () => {
  return (
    <div>
      <Up />
      <Down />
      <Display />
    </div>
  );
};
```

That takes an Up and Down buttons compnent that needs to share their state.
You will have a **store** like this:

src/store.(js/ts)

```tsx
import { Subject } from 'react-spear';

export const Store = {
  counter: new Subject(0),
  // You can add Some other values here to the store,
  // and even an entire Store object to be nested here, whatever you want.
};
```

The Down and Up components should look like this:

src/Up.(jsx/tsx)

```tsx
import React from 'react';
import { useSensable } from 'react-spear';
import { Store } from './store';

export const Up = () => {
  const count = useSensable(Store.counter);
  return <button onClick={() => Store.counter.broadcast(count + 1)}>Up {count}</button>;
};
```

src/Down.(jsx/tsx)

```tsx
import React from 'react';
import { useSensable } from 'react-spear';
import { Store } from './store';

export const Down = () => {
  const count = useSensable(Store.counter);
  return <button onClick={() => Store.counter.broadcast(count - 1)}>Down {count}</button>;
};
```

And the Display component will look loke this:

src/Display.(jsx/tsx)

```tsx
import React from 'react';
import { useSensable } from 'react-spear';
import { Store } from './store';

export const Display = () => {
  const count = useSensable(Store.counter);
  return (
    <div>
      <div>Count is {count}</div>
    </div>
  );
};
```

## Explanation

- When creating the **store** you are creating a subscribable object that can listen to changes.

- When using the **broadcast** method(_you can help me think other names if you don't like this one_),
  you emit the next value of the state, actualy like setState but globally.

- Then with the **useSensable** hook you are sensing the changes from the store(_listening to broadcast event of that specific subject_).
  Inside it uses **_useState_** to manage the update of the incoming new value,
  and **_useEffect_** to manage subscription to that value.

- So everytime you broadcast a new value every component that consume that value via **useSensable**
  are getting rerendered with the new value.

Hope it make **sense** because it does to me.

## Contribution

I would **sincerely** appreciate any suggestion pull/merge requests and just to hear your thoughts

## License

[MIT](LICENSE.md)
