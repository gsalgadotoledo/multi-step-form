import React from 'react';
import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(MUIButton)<MUIButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
  ...theme.typography.button,
  borderRadius: '8px',
}));

export const Button = (props: MUIButtonProps) => {
  return <StyledButton sx={{ px: 3, py: 2 }} {...props} />;
};
