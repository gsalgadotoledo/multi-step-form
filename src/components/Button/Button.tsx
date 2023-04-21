import React from 'react';
import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(MUIButton)<MUIButtonProps>(
  ({
    theme: {
      palette: { secondary, primary },
      typography: { fontFamily },
    },
    color = 'primary',
  }) => ({
    backgroundColor: color === 'primary' ? primary.main : secondary.main,
    '&:hover': {
      backgroundColor: color === 'primary' ? primary.light : secondary.light,
    },
    fontFamily,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '18px',
    letterSpacing: '0px',
    color: primary.contrastText,
    textTransform: 'none',
    borderRadius: '8px',
  })
);

export const Button = (props: MUIButtonProps) => {
  return <StyledButton sx={{ px: 3, py: 2 }} {...props} />;
};
