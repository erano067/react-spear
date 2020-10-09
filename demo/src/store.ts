import { Subject } from 'react-spear';

export const Store = {
    counter: new Subject(0),
    todoList: new Subject<string[]>([])
};