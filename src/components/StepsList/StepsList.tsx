import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import StepsListItem from './StepsListItem';
import stepBg from '../../assets/step-bg.svg';
import { useFormContext } from '../../contexts/FormContext';

const StyledGrid = styled(Grid)(({ theme: { palette } }) => ({
  backgroundColor: palette.secondary.main,
  backgroundImage: `url(${stepBg})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  maxWidth: '274px',
  minHeight: '568px',
  borderRadius: '10px',
}));

const steps = [
  {
    step: 1,
    title: 'STEP 1',
    subtitle: 'YOUR INFO',
  },
  {
    step: 2,
    title: 'STEP 2',
    subtitle: 'SELECT PLAN',
  },
  {
    step: 3,
    title: 'STEP 3',
    subtitle: 'ADD-ONS',
  },
  {
    step: 4,
    title: 'STEP 4',
    subtitle: 'SUMMARY',
  },
];

export const StepsList = () => {
  const { formState } = useFormContext();

  return (
    <StyledGrid
      container
      sx={{
        px: 3,
        paddingTop: '28px',
        flexWrap: 'nowrap',
        flexDirection: 'column',
      }}
    >
      {steps.map(({ title, subtitle, step }, index) => (
        <StepsListItem
          key={step}
          title={title}
          subtitle={subtitle}
          step={step}
          activeItem={formState.currentStep === index}
        />
      ))}
    </StyledGrid>
  );
};

export default StepsList;
