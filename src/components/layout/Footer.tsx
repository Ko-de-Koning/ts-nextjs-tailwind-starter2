import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

export default function Footer() {
  return (
    <div className='layout flex items-center justify-center text-center'>
      <footer className='text-gray-700'>
        © {new Date().getFullYear()}{' '}
        <UnderlineLink href='/'>
          ::::: MilieuVacaturebank.nl :::: work for good not just profit :::::
        </UnderlineLink>
      </footer>
    </div>
  );
}
