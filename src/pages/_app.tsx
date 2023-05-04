import { ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';

import '@/styles/globals.css';

import { theme } from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
