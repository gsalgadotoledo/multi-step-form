import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';

import { Typography } from '@mui/material';

const meta = {
  title: 'Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  render: (args) => (
    <ThemeProvider theme={theme}>
      <Typography {...args} variant="h1">
        Main title
      </Typography>
    </ThemeProvider>
  ),
};

export const H4: Story = {
  render: (args) => (
    <ThemeProvider theme={theme}>
      <Typography {...args} variant="h4">
        Icon Selector Labels, Online service
      </Typography>
    </ThemeProvider>
  ),
};

export const H5: Story = {
  render: (args) => (
    <ThemeProvider theme={theme}>
      <Typography {...args} variant="h5">
        Icon Selector Subtitle
      </Typography>
    </ThemeProvider>
  ),
};

export const H6: Story = {
  render: (args) => (
    <ThemeProvider theme={theme}>
      <Typography {...args} variant="h6">
        Form Labels
      </Typography>
    </ThemeProvider>
  ),
};

export const Subtitle1: Story = {
  render: (args) => (
    <ThemeProvider theme={theme}>
      <Typography {...args} variant="subtitle1">
        Double-check everything looks OK before confirming.
      </Typography>
    </ThemeProvider>
  ),
};

export const Subtitle2: Story = {
  render: (args) => (
    <ThemeProvider theme={theme}>
      <Typography {...args} variant="subtitle2">
        +$1/mo
      </Typography>
    </ThemeProvider>
  ),
};

export const Body1: Story = {
  render: (args) => (
    <ThemeProvider theme={theme}>
      <Typography {...args} variant="body1">
        Access to multiplaye, Larger storage
      </Typography>
    </ThemeProvider>
  ),
};

export const Body2: Story = {
  render: (args) => (
    <ThemeProvider theme={theme}>
      <Typography {...args} variant="body2">
        +$2/mo
      </Typography>
    </ThemeProvider>
  ),
};
