import React, { forwardRef } from 'react';
import {
  Box,
  SwitchProps,
  Switch,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';

export interface BillingSelectorProps extends SwitchProps {
  checked?: boolean;
  labelFalse?: string;
  labelTrue?: string;
}

export const BillingSelector = forwardRef(
  (
    { labelFalse = '', labelTrue = '', ...props }: BillingSelectorProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <Box sx={contentBoxStyles}>
        <Typography
          variant="h4"
          component="span"
          sx={{ display: 'flex', alignItems: 'center', pr: 1 }}
        >
          {labelFalse}
        </Typography>
        <Switch ref={ref} sx={customSwitchStyles} {...props} />
        <Typography
          variant="h4"
          component="span"
          sx={[
            ({ palette: { info } }) => ({ color: info.main }),
            { display: 'flex', alignItems: 'center', pl: 1 },
          ]}
        >
          {labelTrue}
        </Typography>
      </Box>
    );
  }
);

BillingSelector.displayName = 'BillingSelector';

export default BillingSelector;

const contentBoxStyles: SxProps<Theme> = [
  ({ palette: { info } }) => ({ background: info.light }),
  {
    borderRadius: '8px',
    py: 1,
    px: 2,
    display: 'flex',
    justifyContent: 'center',
  },
];

const customSwitchStyles: SxProps<Theme> = [
  ({ palette: { primary } }) => ({
    '&.MuiSwitch-root': {
      padding: '6px',
    },
    '&.MuiSwitch-thumb': {
      width: '18px',
      height: '18px',
    },
    '&.MuiSwitch-root .MuiSwitch-switchBase': {
      color: 'white',
    },
    '&.MuiSwitch-root .Mui-checked': {
      color: 'white',
    },
    '&.MuiSwitch-root .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
      background: primary.main,
      opacity: 1,
    },
    '&.MuiSwitch-root .MuiSwitch-switchBase+.MuiSwitch-track': {
      background: primary.main,
      opacity: 1,
      borderRadius: '14px',
    },
  }),
];
