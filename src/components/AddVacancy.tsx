import React, { useState } from 'react';

import { VacancyObject } from '@/components/Vacancy';

const AddVacancy = () => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text) {
      alert('Plaatst u alstublieft een vacature');
      return;
    }

    addVacancy({ text, day });

    setText('');
    setDay('');
  };

  const addVacancy = async (vacancyObject: VacancyObject) => {
    const res = await fetch('http://localhost:5000/vacancyList', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(vacancyObject),
    });

    const data = await res.json();
    return data;
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Vacature</label>
        <input
          type='text'
          placeholder='Plaats vacature'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Company Name</label>
        <input
          type='text'
          placeholder='Bedrijfsnaam'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <input type='submit' value='Plaats vacature' className='btn btn-block' />
    </form>
  );
};

export default AddVacancy;
