import { Typography } from '@mui/material';
import React from 'react';
import Lottie from 'react-lottie';

import fishLoading from '@/lottiefiles/fishLoading.json';

export default function LoadingScreen() {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: fishLoading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        alignItems: 'center',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h5' fontWeight={500} sx={{ marginBottom: 2 }}>
        Carregando....
      </Typography>
      <Lottie options={lottieOptions} width={250} height={200} />
    </div>
  );
}
