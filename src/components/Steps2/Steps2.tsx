import React from 'react';
import {
  Button as MUIButton,
  Box,
  Typography,
  SxProps,
  Theme,
} from '@mui/material';
import { Button } from '../Button/Button';
import Header from '../Header/Header';
import { useFormContext } from '../../contexts/FormContext';
import { footerStyles } from '../../styles/footer';
import imageIcon3 from '../../assets/icon-3.svg';
import imageIcon2 from '../../assets/icon-2.svg';
import imageIcon1 from '../../assets/icon-1.svg';
import Plan from '../Plan/Plan';
import { ErrorTypography } from '../ErrorTypography/ErrorTypography';
import BillingSelector from '../BillingSelector/BillingSelector';

const planList = [
  {
    title: 'Arcade',
    subtitle: '$9/mo',
    image: imageIcon1,
  },
  {
    title: 'Advanced',
    subtitle: '$12/mo',
    image: imageIcon2,
  },
  {
    title: 'Pro',
    subtitle: '$15/mo',
    image: imageIcon3,
  },
];

export const Steps2 = () => {
  const { formState, setFormState } = useFormContext();

  const handleSelectPlan = (plan: number) => () => {
    setFormState((prevState) => ({
      ...prevState,
      step2: { ...prevState.step2, plan },
    }));
  };

  const handleBillingChange = () => {
    setFormState((prevState) => ({
      ...prevState,
      step2: { ...prevState.step2, billing: !prevState.step2.billing },
    }));
  };

  function handlePrevStep() {
    setFormState((prevState) => ({
      ...prevState,
      currentStep: prevState.currentStep - 1,
    }));
  }

  function handleNextStep() {
    if (formState.step2.plan !== null) {
      setFormState((prevState) => ({
        ...prevState,
        currentStep: prevState.currentStep + 1,
      }));
    }
  }

  return (
    <>
      <Header
        title="Select your plan"
        subtitle="You have the option of monthly or yearly billing."
      />
      <Box sx={boxStyles}>
        <Box sx={{ ...boxStyles, pt: 4 }}>
          <Box sx={contentStyles}>
            {planList.map(({ title, subtitle, image }, index) => (
              <Plan
                key={title}
                checked={formState.step2.plan === index}
                onClick={handleSelectPlan(index)}
              >
                <Box>
                  <img src={image} alt={`Icon ${title}`} />
                </Box>
                <Box>
                  <Typography variant="h4" component="h4" sx={{ mb: 1 }}>
                    {title}
                  </Typography>
                  <Typography variant="h5" component="h5">
                    {subtitle}
                  </Typography>
                </Box>
              </Plan>
            ))}
          </Box>
          <Box sx={{ mt: 4 }}>
            <BillingSelector
              checked={!!formState.step2.billing}
              onChange={handleBillingChange}
              labelFalse="Monthly"
              labelTrue="Yearly"
            />
          </Box>
          <Box sx={{ mt: 2, justifyContent: 'flex-end', display: 'flex' }}>
            {formState.step2.plan === null && (
              <ErrorTypography>Please select at least one plan</ErrorTypography>
            )}
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
        <Button type="button" onClick={handleNextStep}>
          Next Step
        </Button>
      </Box>
    </>
  );
};

export default Steps2;

const boxStyles = {
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
};

const contentStyles: SxProps<Theme> = [
  ({ breakpoints: { down } }) => ({
    display: 'grid',
    gap: '18px',
    gridAutoFlow: 'column',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    [down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
];
