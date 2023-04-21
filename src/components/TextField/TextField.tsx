import React, { forwardRef } from 'react';
import {
  Box,
  OutlinedInput as MUIOutlineInput,
  OutlinedInputProps,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';

const inputPropsStyles = {
  padding: '13px 14px',
  fontSize: '16px',
  lineHeight: '18px',
};

const inputStyles = (error?: string): SxProps<Theme> => [
  { '& .MuiOutlinedInput-notchedOutline': { opacity: 0 }, borderRadius: '8px' },
  ({ palette: { secondary, info, error: errorStyle } }) => ({
    '&:hover, &:active': { border: `1px solid ${secondary.main}` },
    border: `1px solid ${error ? errorStyle.main : info.dark} `,
  }),
];

const errorLabelStyles: SxProps<Theme> = [
  ({ palette: { error } }) => ({
    display: 'block',
    mb: 1,
    fontWeight: 700,
    justifyContent: 'space-between',
    color: error.main,
  }),
];

export interface TextFieldProps extends OutlinedInputProps {
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  errorMessage?: string;
}

export const TextField = forwardRef(
  (
    {
      label,
      placeholder,
      value,
      onChange,
      errorMessage,
      ...rest
    }: TextFieldProps,
    ref
  ) => {
    return (
      <Box sx={{ marginBottom: '20px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ mb: 1 }} variant="h6" component="label">
            {label}
          </Typography>
          {errorMessage && (
            <Typography sx={errorLabelStyles} variant="h6" component="span">
              {errorMessage}
            </Typography>
          )}
        </Box>
        <MUIOutlineInput
          ref={ref}
          value={value}
          onChange={onChange}
          sx={inputStyles(errorMessage)}
          placeholder={placeholder}
          inputProps={{ sx: inputPropsStyles }}
          fullWidth
          {...rest}
        />
      </Box>
    );
  }
);

TextField.displayName = 'TextField';

export default TextField;
