import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';

import { TextField } from './TextField';

const meta = {
  title: 'Molecules/TextField',
  component: TextField,
  tags: ['autodocs'],
} as Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Phone',
    placeholder: 'e.g. +1 234 567 890',
  },
  render: (args) => (
    <ThemeProvider theme={theme}>
      <TextField {...args} />
    </ThemeProvider>
  ),
};

export const WithError: Story = {
  args: {
    label: 'Phone',
    placeholder: 'e.g. +1 234 567 890',
    error: 'This field is required',
  },
  render: (args) => (
    <ThemeProvider theme={theme}>
      <TextField {...args} />
    </ThemeProvider>
  ),
};
