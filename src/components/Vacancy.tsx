import React from 'react';

export interface VacancyObject {
  text: string;
  day: string;
  id?: number;
}

interface Vacancy {
  vacancy: VacancyObject;
}

const Vacancy = ({ vacancy }: Vacancy) => {
  return (
    <div className='vacancy'>
      <h3>{vacancy.text}</h3>
      <p>{vacancy.day}</p>
    </div>
  );
};

export default Vacancy;
