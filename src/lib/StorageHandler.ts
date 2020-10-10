export class StorageHandler {
  private storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  public get<T>(key: string): T {
    const item = this.storage.getItem(key);

    return item ? JSON.parse(item) : null;
  }

  public set<T>(key: string, value: T): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  public getOrCreate<T>(key: string, defaultValue: T): T {
    let value: T = this.get<T>(key);

    if (value === null) {
      value = defaultValue;
      this.set(key, value);
    }

    return value;
  }
}
