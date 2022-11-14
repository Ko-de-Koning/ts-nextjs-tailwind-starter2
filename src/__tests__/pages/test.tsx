import { FC, useEffect, useState } from 'react';

export default function TestPage() {
  const [query, setQuery] = useState<string>('');

  let options = ['Mannen', 'Vrouwen', 'Dieren'];

  if (query != '') {
    options = options.filter((x) =>
      x.toLowerCase().includes(query.toLowerCase())
    );
  }

  return (
    <main>
      <Search onChange={(value) => setQuery(value)} />
      <CheckboxGroup options={options} />
    </main>
  );
}

const Search: FC<{ onChange: (value: string) => void }> = (props) => {
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    props.onChange(query);
  }, [props, query]);

  return (
    <input
      type='text'
      value={query}
      className='bg-black text-white'
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

const CheckboxGroup: FC<{ options: string[] }> = (props) => {
  return (
    <>
      {props.options.map((option) => (
        <Checkbox key={option} label={option} />
      ))}
    </>
  );
};

const Checkbox: FC<{ label: string }> = (props) => {
  return (
    <label className='block'>
      <input type='checkbox' value={props.label} />
      {props.label}
    </label>
  );
};
