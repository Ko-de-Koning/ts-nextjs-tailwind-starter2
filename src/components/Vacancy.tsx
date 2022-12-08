import React from 'react';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';

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
    <div className='my-4 rounded-lg bg-slate-200'>
      <div className='card flex flex-col justify-between rounded-lg md:flex-row'>
        <NextImage
          useSkeleton
          src='/images/pinguin.jpg'
          width='1024px'
          height='745px'
          alt='Bedrijfslogo'
          className='h-full sm:w-auto md:w-1/5'
          imgClassName='rounded-t-lg md:rounded-l-lg md:rounded-tr-none'
        />
        <div className='flex flex-col p-3 text-sm text-gray-500 md:w-4/5 md:flex-row md:justify-between'>
          <div className='p-2 font-bold'>
            <>{vacancy.text}</>
          </div>
          <div>{vacancy.day}</div>
          <div className='pt-2'>
            <Button variant='light'>Apply</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancy;
