import { StorageHandler } from '../lib/StorageHandler';
import { Subject } from './Subject';

export class StorageSubject<T> extends Subject<T> {
  private storageKey: string;
  private storage: StorageHandler;

  constructor(storage: StorageHandler, storageKey: string, initialValue?: T) {
    super(storage.getOrCreate(storageKey, initialValue));
    this.storageKey = storageKey;
    this.storage = storage;
  }

  public broadcast = (nextValue: T) => {
    this.storage.set(this.storageKey, nextValue);
    super.broadcast(nextValue);
  };
}
