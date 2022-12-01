import { useRouter } from 'next/router';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

export default function Header() {
  const router = useRouter();
  return (
    <header className='sticky top-0 z-50 bg-[#e9e7e2]'>
      <div className='layout flex h-14 items-center justify-between divide-x'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          Home
        </UnstyledLink>
        <nav>
          <div className='space-x-100 flex items-center justify-between pl-14'>
            {router.pathname === '/add-vacancy' ? (
              <UnstyledLink href='/' className='hover:text-gray-600'>
                Alle vactures
              </UnstyledLink>
            ) : (
              <UnstyledLink href='/add-vacancy' className='hover:text-gray-600'>
                Werkgever
              </UnstyledLink>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
