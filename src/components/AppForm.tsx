import { FormEvent, useState } from 'react';

interface IFormProps {
  onSubmit: (text: string) => void;
}

export const AppForm = (props: IFormProps) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.onSubmit(input);
    setInput('');
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        value={input}
        type='text'
        onChange={(e) => setInput(e.target.value)}
      />
      <button disabled={input === ''}>search</button>
    </form>
  );
};
