import { ChangeEvent, useState } from 'react';

interface IFormProps {
  onSubmit: (text: string) => void;
}

export const AppForm = (props: IFormProps) => {
  const [input, setInput] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    props.onSubmit(input);
  };

  return (
    <>
      <input type='text' onChange={handleChange} />
      <button onClick={handleClick}>search</button>
    </>
  );
};
