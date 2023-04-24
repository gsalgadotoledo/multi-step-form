import React from 'react';
import { Box, BoxProps, SxProps, Theme } from '@mui/material';

export interface PlanProps extends BoxProps {
  children: React.ReactNode;
  checked?: boolean;
}

export const Plan: React.FC<PlanProps> = ({
  children,
  checked = false,
  ...props
}) => {
  return (
    <Box sx={contentStyles(checked)} {...props}>
      {children}
    </Box>
  );
};

export default Plan;

const contentStyles = (checked: boolean): SxProps<Theme> => [
  ({ palette: { info, secondary, primary }, breakpoints: { down } }) => ({
    borderRadius: '8px',
    border: `1px solid ${checked ? secondary.main : info.dark}`,
    '&:hover': { border: `1px solid ${secondary.main}` },
    backgroundColor: checked ? info.light : primary.contrastText,
    padding: '16px',
    paddingTop: '20px',
    minHeight: '160px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    cursor: 'pointer',
    [down('sm')]: {
      display: 'flex',
      flexDirection: 'row',
      minHeight: 'fit-content',
      justifyContent: 'flex-start',
      gap: '14px',
    },
  }),
];
