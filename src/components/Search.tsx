import React, { useState } from 'react';
import JSONDATA from 'SEARCH_TEST_DATA.json';

export default function SearchField() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e: { target: { value: string } }) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='relative'>
      <input
        type='text'
        placeholder='Zoek doelgroep'
        value={searchTerm}
        onChange={handleChange}
        className='w-full rounded border-none'
      />
      <svg
        aria-hidden='true'
        className='absolute right-2 -mt-7'
        width='18'
        height='18'
        viewBox='0 0 18 18'
      >
        <path d='m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z'></path>
      </svg>
      <ul>
        {JSONDATA.filter((user) =>
          user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((user) => {
          return (
            <div key={user.id}>
              <ul className='hidden'>
                <p>
                  <span>{user.first_name}</span> <span>{user.last_name}</span>
                </p>
              </ul>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
