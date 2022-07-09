import { useState } from 'react';

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onClickChange = (newValue) => {
    setValue(newValue);
  };

  return [value, onChange, onClickChange];
}
