import React from 'react';
import { useForm } from 'react-hook-form';
import { Button as MUIButton, Box } from '@mui/material';
import { Button } from '../Button/Button';
import Header from '../Header/Header';
import { useFormContext } from '../../contexts/FormContext';
import { footerStyles } from '../../styles/footer';
import AddOnSelector from '../AddOnSelector/AddOnSelector';
import { ErrorTypography } from '../ErrorTypography/ErrorTypography';

const addOnsList = [
  {
    title: 'Online service',
    subtitle: 'Access to multiplayer games',
    price: '+$1/mo',
    id: 1,
  },
  {
    title: 'Larger storage',
    subtitle: 'Extra 1TB of cloud save',
    price: '+$2/mo',
    id: 2,
  },
  {
    title: 'Customizable Profile',
    subtitle: 'Custom theme on your profile',
    price: '+$2/mo',
    id: 3,
  },
];

export const Steps3 = () => {
  const { formState, setFormState } = useFormContext();
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    // Handle submit
  };

  function handlePrevStep(): void {
    setFormState((prevState) => ({
      ...prevState,
      currentStep: prevState.currentStep - 1,
    }));
  }

  function handleNextStep(): void {
    if (Object.keys(formState.step3.addOns).length <= 0) return;

    setFormState((prevState) => ({
      ...prevState,
      currentStep: prevState.currentStep + 1,
    }));
  }

  function handleChanAddOns(value?: { [key: number]: boolean }): void {
    if (!value) return;
    setFormState((prevState) => ({
      ...prevState,
      step3: { ...prevState.step3, addOns: value },
    }));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Header
        title="Pick add-ons"
        subtitle="Add-ons help enhance your gaming experience."
      />
      <Box sx={boxStyles}>
        <AddOnSelector
          options={addOnsList}
          value={formState.step3.addOns}
          onChange={handleChanAddOns}
        />
        <Box sx={{ mt: 2, justifyContent: 'flex-end', display: 'flex' }}>
          {Object.keys(formState.step3.addOns).length <= 0 && (
            <ErrorTypography>Please select at least one add on</ErrorTypography>
          )}
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
    </form>
  );
};

export default Steps3;

const boxStyles = {
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
};
