import React, { useState } from 'react';
import JSONDATA from 'SEARCH_TEST_DATA.json';

export default function SearchField() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e: { target: { value: string } }) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Zoek doelgroep'
        value={searchTerm}
        onChange={handleChange}
        className='max-w-screen-lg rounded'
      />
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
