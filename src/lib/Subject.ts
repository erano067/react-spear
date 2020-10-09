import { ISubscribable, Subscribable } from './Subscribable';

export interface ISubject<T> extends ISubscribable<T> {
  value: T;
}

export class Subject<T> extends Subscribable<T> implements ISubject<T> {
  public value: T;

  constructor(initialValue?: T) {
    super();
    this.value = initialValue as T;
  }

  public broadcast(nextValue: T) {
    this.value = nextValue;
    super.broadcast(nextValue);
  }
}
