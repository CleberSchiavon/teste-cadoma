import { ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';

import '@/styles/globals.css';

import { theme } from '@/styles/theme';
import { useEffect, useState } from 'react';
import React from 'react';
import LoadingScreen from '@/components/LoadingScreen';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  });
  return (
    <>
      {!loading ? (
        <React.Fragment>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </React.Fragment>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default MyApp;
