import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import fishLoading from '@/lottiefiles/fishLoading.json';
import Lottie from 'react-lottie';

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
      <Typography variant='h5'>Carregando....</Typography>
      <Lottie options={lottieOptions} height={200} width={200} />
    </div>
  );
}
