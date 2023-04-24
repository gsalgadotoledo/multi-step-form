import React from 'react';
import Header from '../Header/Header';
import thankYouImage from '../../assets/thank-you.svg';
import { Box } from '@mui/material';

export const Steps5 = () => {
  return (
    <>
      <Box></Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pt: 4,
          pb: 8,
        }}
      >
        <Box sx={{ mb: 4 }}>
          <img src={thankYouImage} alt="Thank you" />
        </Box>
        <Header
          textAlign="center"
          title="Thank you!"
          subtitle="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
        />
      </Box>
      <Box></Box>
    </>
  );
};

export default Steps5;
