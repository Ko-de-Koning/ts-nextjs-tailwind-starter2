import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
import VacancyList from '@/components/VacancyList';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <div>
      <Seo
        templateTitle='Home of De MilieuVacaturebank'
        description=':::: Dé Milieu Vacature Site!! :::: Totaal Aanbod aan Milieu Banen :::: Snel en Voordelig Personeel Werven ::::'
      />
      <section className='bg-white'>
        <div className='layout flex flex-col items-center justify-center text-center'>
          <h1 className='mt-4'>
            :::: MilieuVacaturebank.nl ::: dan is het goed ::::
          </h1>
          <p className='text-sm text-gray-800'>
            :::: Dé Milieu Vacature Site!! :::: Totaal Aanbod aan Milieu Banen
            :::: Snel en Voordelig Personeel Werven ::::{' '}
          </p>
          <section>
            <VacancyList />
          </section>
          <div className='my-6 grid place-items-center space-x-2'>
            <UnderlineLink href='https://www.twitter.com/milieuvolutie'>
              De MilieuVacaturebank gaat verder
            </UnderlineLink>
          </div>
        </div>
      </section>
    </div>
  );
}
