import React from 'react';
import { ErrorTypography } from './ErrorTypography';
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';

export default {
  title: 'Atoms/ErrorTypography',
  component: ErrorTypography,
  tags: ['autodocs'],
} as const;

export const Default = () => (
  <ThemeProvider theme={theme}>
    <ErrorTypography>Oops. Something went wrong.</ErrorTypography>
  </ThemeProvider>
);
