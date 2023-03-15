import { useState, useCallback } from 'react';

export default (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const toggler = useCallback(() => setValue((value: any) => !value), []);
  return [value, toggler];
};
