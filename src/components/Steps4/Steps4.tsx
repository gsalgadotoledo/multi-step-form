import React from 'react';
import {
  Button as MUIButton,
  Box,
  Typography,
  Link,
  SxProps,
  Theme,
} from '@mui/material';
import { Button } from '../Button/Button';
import Header from '../Header/Header';
import { useFormContext } from '../../contexts/FormContext';
import { footerStyles } from '../../styles/footer';

export const Steps4 = () => {
  const { formState, setFormState } = useFormContext();

  function handlePrevStep() {
    setFormState((prevState) => ({
      ...prevState,
      currentStep: prevState.currentStep - 1,
    }));
  }

  function handleNextStep() {
    setFormState((prevState) => ({
      ...prevState,
      currentStep: prevState.currentStep + 1,
    }));
  }

  return (
    <>
      <Header
        title="Finishing up"
        subtitle="Double-check everything looks OK before confirming."
      />
      <Box sx={boxStyles}>
        <Box sx={containerBoxStyles}>
          <Box sx={grayBoxStyles}>
            {' '}
            {/* Grey box */}
            <Box
              sx={{
                ...textRowStyles,
                borderBottom: '1px solid rgb(150 153 170 / 20%)',
                mb: 2,
              }}
            >
              {' '}
              {/* 1 row */}
              <Box sx={{}}>
                <Box sx={{ mb: 1 }}>
                  <Typography variant="h4">Arcade (Monthly)</Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Link href="#" variant="h5" color="secondary">
                    Change
                  </Link>
                </Box>
              </Box>
              <Box sx={{}}>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  $9/mo
                </Typography>
              </Box>
            </Box>
            <Box sx={{ ...textRowStyles, mb: 2 }}>
              {' '}
              {/* 2 row */}
              <Box sx={{}}>
                <Typography variant="h5">Online service</Typography>
              </Box>
              <Box sx={{}}>+$1/mo</Box>
            </Box>
            <Box sx={{ ...textRowStyles }}>
              {' '}
              {/* 3 row */}
              <Box sx={{}}>
                <Typography variant="h5">Total (per month)</Typography>
              </Box>
              <Box sx={{}}>+$12/mo</Box>
            </Box>
          </Box>
          <Box
            sx={{
              ...textRowStyles,
              padding: '16px 24px',
            }}
          >
            <Box sx={{}}>
              <Typography variant="h5">Total (per month)</Typography>
            </Box>
            <Box sx={{}}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 700,
                  fontSize: '20px',
                }}
              >
                +$12/mo
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={footerStyles}>
        <MUIButton
          onClick={handlePrevStep}
          sx={{
            textTransform: 'none',
            opacity: formState.currentStep > 0 ? 1 : 0,
            color: 'info.main',
          }}
          variant="text"
        >
          Go Back
        </MUIButton>
        <Button type="button" onClick={handleNextStep} color="secondary">
          Next Step
        </Button>
      </Box>
    </>
  );
};

export default Steps4;

const textRowStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const grayBoxStyles: SxProps<Theme> = [
  ({ breakpoints: { down }, palette: { info } }) => ({
    background: info.light,
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    padding: '16px 24px 24px 24px',
    mb: 3,
    [down('sm')]: {
      padding: '16px 16px 24px 16px',
    },
  }),
];

const containerBoxStyles: SxProps<Theme> = [
  ({ breakpoints: { down } }) => ({
    ...boxStyles,
    pt: 4,
    [down('sm')]: {
      pt: 3,
    },
  }),
];

const boxStyles = {
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
};
