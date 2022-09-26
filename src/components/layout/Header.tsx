import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

const links = [
  { href: '/', label: 'NL' },
  { href: '/', label: 'ENG' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-[#f4f3ed]'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          <NextImage
            useSkeleton
            className='w-32 md:w-40'
            src='/images/logo-fnf-wit.png'
            width='145'
            height='25'
            alt='fNf logo'
          />
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
