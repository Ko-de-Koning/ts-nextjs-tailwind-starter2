import React, { useState } from 'react';
import JSONDATA from 'SEARCH_TEST_DATA.json';

export default function SearchField() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e: { target: { value: string } }) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='Search'>
      <input
        type='text'
        placeholder='Zoek doelgroep'
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {JSONDATA.filter((user) =>
          user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((user) => {
          return (
            <div key={user.id}>
              {/* the below code creates the (filtered) list */}
              {/* {<ul>
                <p>{user.first_name}</p>
              }</ul> */}
            </div>
          );
        })}
      </ul>
    </div>
  );
}
