import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button as MUIButton, Box } from '@mui/material';
import * as yup from 'yup';
import { Button } from '../Button/Button';
import Header from '../Header/Header';
import { TextField } from '../TextField/TextField';
import { useFormContext } from '../../contexts/FormContext';
import { footerStyles } from '../../styles/footer';
import { FormState } from '../../contexts/FormContext';

const boxStyles = {
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
};

// Validation schema using Yup
const step1Schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  emailAddress: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  phoneNumber: yup.string().required('Phone number is required'),
});

export const Steps1 = () => {
  const { formState, setFormState } = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(step1Schema),
    defaultValues: formState.step1,
  });

  const onSubmit = (data: FormState['step1']) => {
    // Handle submit
    setFormState((prevState) => ({
      ...prevState,
      step1: data,
      currentStep: prevState.currentStep + 1,
    }));
  };

  function handlePrevStep() {
    setFormState((prevState) => ({
      ...prevState,
      currentStep: prevState.currentStep - 1,
    }));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Header
        title="Personal info"
        subtitle="Please provide your name, email address, and phone number."
      />
      <Box sx={boxStyles}>
        <Box sx={{ ...boxStyles, pt: 4 }}>
          <TextField
            {...register('name')}
            label="Name"
            errorMessage={errors.name?.message as string}
          />
          <TextField
            {...register('emailAddress')}
            label="Email"
            errorMessage={errors.emailAddress?.message as string}
          />
          <TextField
            {...register('phoneNumber')}
            label="Phone Number"
            errorMessage={errors.phoneNumber?.message as string}
          />
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
        <Button type="submit">Next Step</Button>
      </Box>
    </form>
  );
};

export default Steps1;
