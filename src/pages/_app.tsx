import { ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import React from 'react';
import { ToastContainer } from 'react-toastify';

import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import LoadingScreen from '@/components/LoadingScreen';

import { theme } from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  });
  return (
    <>
      {!loading ? (
        <React.Fragment>
          <ToastContainer />
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
