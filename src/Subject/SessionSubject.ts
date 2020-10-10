import { StorageHandler } from '../lib/StorageHandler';
import { StorageSubject } from './StorageSubject';

const sessionStorageManager = new StorageHandler(sessionStorage);

export class SessionSubject<T> extends StorageSubject<T> {
  constructor(storageKey: string, initialValue?: T) {
    super(sessionStorageManager, storageKey, initialValue);
  }
}
