import { StorageHandler } from '../lib/StorageHandler';
import { StorageSubject } from './StorageSubject';

const localStorageManager = new StorageHandler(localStorage);

export class LocalSubject<T> extends StorageSubject<T> {
    constructor(storageKey: string, initialValue?: T) {
        super(localStorageManager, storageKey, initialValue);
    }
}
