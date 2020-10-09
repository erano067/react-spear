export type SubscribableHandler<T> = (nextValue: T) => void;

export interface ISubscribable<T> {
  subscribe: (handler: SubscribableHandler<T>) => () => void;
}

export class Subscribable<T> implements ISubscribable<T> {
  private _norifiers: SubscribableHandler<T>[] = [];

  protected broadcast(value: T) {
    this._norifiers.forEach((notifier) => notifier(value));
  }

  public subscribe = (handler: SubscribableHandler<T>) => {
    this._norifiers.push(handler);

    return () => {
      const handlerIndex = this._norifiers.findIndex((_) => _ === handler);

      if (handlerIndex === -1) return;

      this._norifiers = this._norifiers.splice(handlerIndex, 1);
    };
  };
}
