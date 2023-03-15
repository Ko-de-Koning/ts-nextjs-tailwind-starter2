import '../styles/globals.css';
import 'thin-backend-react/auth.css';

import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';
import { ThinBackend } from 'thin-backend-react';
import { initThinBackend } from 'thin-backend';

initThinBackend({ host: process.env.NEXT_PUBLIC_BACKEND_URL });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ThinBackend>
        <Component {...pageProps} />
      </ThinBackend>
    </Layout>
  );
}
export default MyApp;
