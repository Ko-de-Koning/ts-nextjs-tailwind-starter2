import * as React from 'react';

import Loginbutton from '../buttons/Loginbutton';
import NextImage from '@/components/NextImage';
import UnstyledLink from '@/components/links/UnstyledLink';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <header className='sticky top-0 z-50 bg-[#e9e7e2]'>
      <div className='layout flex h-14 items-center divide-x'>
        <nav className='flex-no-wrap flex w-full justify-between'>
          <div className='space-x-100'>
            {router.pathname !== '/' ? (
              <UnstyledLink href='/' className='hover:text-gray-600'>
                Home
              </UnstyledLink>
            ) : (
              <Loginbutton />
            )}
          </div>
          <div className=''>
            <NextImage
              useSkeleton
              src='/svg/Home.svg'
              width='1024px'
              height='745px'
              alt='Home-logo'
              className='w-6'
              imgClassName=''
            />
          </div>
          <div className=''>
            <NextImage
              useSkeleton
              src='/svg/menu-3-bars.svg'
              width='1024px'
              height='745px'
              alt='Menu-right'
              className='w-6'
              imgClassName=''
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
