import React from 'react';
import { SxProps, Theme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import StepsListItem from './StepsListItem';
import stepBg from '../../assets/step-bg.svg';
import stepBgMobile from '../../assets/step-bg-mobile.svg';
import { useFormContext } from '../../contexts/FormContext';

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
    <Grid container sx={contentStyles}>
      {steps.map(({ title, subtitle, step }, index) => (
        <StepsListItem
          key={step}
          title={title}
          subtitle={subtitle}
          step={step}
          activeItem={formState.currentStep === index}
        />
      ))}
    </Grid>
  );
};

export default StepsList;

const contentStyles: SxProps<Theme> = [
  ({
    palette: {
      secondary: { main: backgroundColor },
    },
    breakpoints: { down },
  }) => ({
    px: 3,
    paddingTop: '28px',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    backgroundColor,
    backgroundImage: `url(${stepBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    maxWidth: '274px',
    minHeight: '568px',
    borderRadius: '10px',
    [down('sm')]: {
      position: 'absolute',
      zIndex: -10,
      top: 0,
      maxWidth: '100%',
      left: 0,
      borderRadius: '0px',
      flexDirection: 'row',
      minHeight: '172px',
      padding: '18px 15%',
      backgroundImage: `url(${stepBgMobile})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  }),
];
