import React from 'react';
import { useForm } from 'react-hook-form';
import { Button as MUIButton, Box } from '@mui/material';
import { Button } from '../Button/Button';
import Header from '../Header/Header';
import { useFormContext } from '../../contexts/FormContext';
import { footerStyles } from '../../styles/footer';

const boxStyles = {
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
};

export const Steps2 = () => {
  const { formState, setFormState } = useFormContext();
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    // Handle submit
  };

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Header
        title="Select your plan"
        subtitle="You have the option of monthly or yearly billing."
      />
      <Box sx={boxStyles}>
        <Box sx={{ ...boxStyles, pt: 4 }}>Step 2</Box>
      </Box>
      <Box sx={footerStyles}>
        <MUIButton
          onClick={handlePrevStep}
          sx={{
            textTransform: 'none',
            opacity: formState.currentStep > 0 ? 1 : 0,
          }}
          variant="text"
        >
          Go Back
        </MUIButton>
        <Button type="button" onClick={handleNextStep}>
          Next Step
        </Button>
      </Box>
    </form>
  );
};

export default Steps2;
