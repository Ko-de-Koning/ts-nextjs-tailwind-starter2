import React, { useEffect, useState } from 'react';

import type { VacancyObject } from './Vacancy';
import Vacancy from './Vacancy';

const VacancyList = () => {
  const [vacancyList, setVacancyList] = useState([] as VacancyObject[]);

  useEffect(() => {
    const getVacancyList = async () => {
      const vacancyListFromServer = await fetchVacancyList();
      setVacancyList(vacancyListFromServer);
    };

    getVacancyList();
    // console.log(vacancyList)
  }, []);

  // Fetch vacancyList
  const fetchVacancyList = async () => {
    const res = await fetch('http://localhost:5000/vacancyList');
    const data = await res.json();

    return data;
  };

  if (vacancyList.length === 0) {
    return <></>;
  }

  return (
    <div className='vacancylist my-8'>
      {vacancyList.map((vacancy, index) => (
        <Vacancy key={vacancy.id ? vacancy.id : index} vacancy={vacancy} />
      ))}
    </div>
  );
};

export default VacancyList;
