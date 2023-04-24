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

export const Steps3 = () => {
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
        title="Pick add-ons"
        subtitle="Add-ons help enhance your gaming experience."
      />
      <Box sx={boxStyles}>
        <Box sx={{ ...boxStyles, pt: 4 }}>Step 3</Box>
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
    </form>
  );
};

export default Steps3;
