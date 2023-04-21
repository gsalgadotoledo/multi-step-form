import React from 'react';
import { Box, Button as MUIButton, Container, Typography } from '@mui/material';
import { Button } from '../Button/Button';
import ContentBox from '../ContentBox/ContentBox';
import StepsList from '../StepsList/StepsList';
import Header from '../Header/Header';

const contentBoxStyles = {
  flex: 1,
  paddingLeft: '98px',
  paddingRight: `${98 - 16}px`,
  paddingTop: '44px',
  pb: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const boxStyles = {
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
};

const leftBoxStyles = { width: '274px' };

export const MainLayout = () => {
  return (
    <Container>
      <ContentBox>
        <Box sx={leftBoxStyles}>
          <StepsList />
        </Box>
        <Box sx={contentBoxStyles}>
          <Header
            title="Personal info"
            subtitle="Please provide your name, email address, and phone number."
          />
          <Box sx={boxStyles}>
            <Box sx={{ ...boxStyles, pt: 4 }}>
              <Typography variant="body1">Content Here</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <MUIButton sx={{ textTransform: 'none' }} variant="text">
              Text
            </MUIButton>
            <Button>Next Step</Button>
          </Box>
        </Box>
      </ContentBox>
    </Container>
  );
};
