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
          className='h-full w-full'
          imgClassName='rounded-t-lg md:rounded-l-lg md:rounded-tr-none'
        />
        <div className='p-3 text-sm text-gray-500'>
          <div className='font-bold'>
            <>{vacancy.text}</>
          </div>
          <p>{vacancy.day}</p>
          <div className='center pt-2'>
            <Button variant='light'>Apply</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancy;
