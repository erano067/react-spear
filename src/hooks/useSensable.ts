import { ISubject } from '../Subject/Subject';
import { useEffect, useState } from 'react';

export const useSensable = <T>(subject: ISubject<T>) => {
  const [value, setValue] = useState(subject.value);

  useEffect(() => subject.subscribe(setValue), [subject]);

  return value;
};
