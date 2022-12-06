import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

export default function Header() {
  const router = useRouter();
  return (
    <header className='sticky top-0 z-50 bg-[#e9e7e2]'>
      <div className='layout flex h-14 items-center justify-between divide-x'>
        <nav>
          <div className='space-x-100 object-right pl-14'>
            {router.pathname !== '/' ? (
              <UnstyledLink href='/' className='hover:text-gray-600'>
                Home
              </UnstyledLink>
            ) : (
              <button
                onClick={() => {
                  signIn();
                }}
              >
                Werkgever
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
