import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'NL/' },
  { href: '/', label: 'ENG' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-[#e9e7e2]'>
      <div className='layout flex h-14 items-center justify-between divide-x'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          Home
        </UnstyledLink>
        <nav>
          <ul className='space-x-100 flex items-center justify-between pl-14'>
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
