import React from 'react';
import type { StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';

import { BillingSelector } from './BillingSelector';

const meta = {
  title: 'Atoms/BillingSelector',
  component: BillingSelector,
  tags: ['autodocs'],
} as const;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ThemeProvider theme={theme}>
      <BillingSelector
        {...{
          labelTrue: 'Monthly',
          labelFalse: 'Yearly',
          checked: false,
          onClick: () => {},
        }}
      />
    </ThemeProvider>
  ),
};
export const Checked: Story = {
  render: () => (
    <ThemeProvider theme={theme}>
      <BillingSelector
        {...{
          labelTrue: 'Monthly',
          labelFalse: 'Yearly',
          checked: true,
          onClick: () => {},
        }}
      />
    </ThemeProvider>
  ),
};
