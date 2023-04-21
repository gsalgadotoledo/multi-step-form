import React from 'react';
import {
  Box,
  OutlinedInput as MUIOutlineInput,
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

export interface TextFieldProps {
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}

export const TextField = ({
  label,
  placeholder,
  value,
  onChange,
  error,
}: TextFieldProps) => {
  return (
    <Box sx={{ marginBottom: '20px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={{ mb: 1 }} variant="h6" component="label">
          {label}
        </Typography>
        {error && (
          <Typography sx={errorLabelStyles} variant="h6" component="span">
            {error}
          </Typography>
        )}
      </Box>
      <MUIOutlineInput
        value={value}
        onChange={onChange}
        sx={inputStyles(error)}
        placeholder={placeholder}
        inputProps={{ sx: inputPropsStyles }}
        fullWidth
      />
    </Box>
  );
};

export default TextField;
