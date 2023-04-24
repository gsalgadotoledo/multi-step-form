import React from 'react';
import { Box, Container, SxProps, Theme } from '@mui/material';
import ContentBox from '../ContentBox/ContentBox';
import StepsList from '../StepsList/StepsList';
import { useFormContext } from '../../contexts/FormContext';
import { Steps1 } from '../Steps1/Steps1';
import { Steps2 } from '../Steps2/Steps2';
import { Steps3 } from '../Steps3/Steps3';
import { Steps4 } from '../Steps4/Steps4';
import { Steps5 } from '../Steps5/Steps5';

const steps = [
  <Steps1 key="1" />,
  <Steps2 key="2" />,
  <Steps3 key="3" />,
  <Steps4 key="4" />,
  <Steps5 key="5" />,
];

export const MainLayout = () => {
  const {
    formState: { currentStep },
  } = useFormContext();

  return (
    <Container sx={{ mt: 8 }}>
      <ContentBox>
        <Box sx={leftBoxStyles}>
          <StepsList />
        </Box>
        <Box sx={contentBoxStyles}>{steps[currentStep]}</Box>
      </ContentBox>
    </Container>
  );
};

const contentBoxStyles: SxProps<Theme> = [
  {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    paddingLeft: '98px',
    paddingRight: `${98 - 16}px`,
    paddingTop: '44px',
    pb: 2,
    justifyContent: 'space-between',
    '& > form': {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
  },
  ({ breakpoints: { down } }) => ({
    [down('sm')]: {
      padding: '14px 5px 0px',
    },
  }),
];

const leftBoxStyles = { width: '274px' };
