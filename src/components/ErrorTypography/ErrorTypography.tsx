import React from 'react';
import { Typography, TypographyProps } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

interface ErrorTypographyProps extends TypographyProps {
  children: React.ReactNode;
}

export const ErrorTypography = ({
  children,
  ...rest
}: ErrorTypographyProps) => {
  return (
    <Typography sx={errorLabelStyles} variant="h6" component="span" {...rest}>
      {children}
    </Typography>
  );
};

const errorLabelStyles: SxProps<Theme> = [
  ({ palette: { error } }) => ({
    display: 'block',
    mb: 1,
    fontWeight: 700,
    justifyContent: 'space-between',
    color: error.main,
  }),
];
