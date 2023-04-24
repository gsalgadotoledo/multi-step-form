import React from 'react';
import type { StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';
import imageIcon1 from '../../assets/icon-1.svg';

import { Plan } from './Plan';
import { Box, Typography } from '@mui/material';

const meta = {
  title: 'Atoms/Plan',
  component: Plan,
  tags: ['autodocs'],
} as const;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'lorem ipsum' },
  render: () => (
    <ThemeProvider theme={theme}>
      <Plan
        {...{
          checked: false,
          onClick: () => {},
        }}
      >
        <Box>
          <img src={imageIcon1} alt={`Icon `} />
        </Box>
        <Box>
          <Typography variant="h4" component="h4" sx={{ mb: 1 }}>
            Ultra
          </Typography>
          <Typography variant="h5" component="h5">
            $10/mo
          </Typography>
        </Box>
      </Plan>
    </ThemeProvider>
  ),
};
export const Checked: Story = {
  args: { children: 'lorem ipsum' },
  render: () => (
    <ThemeProvider theme={theme}>
      <Plan
        {...{
          checked: true,
          onClick: () => {},
        }}
      >
        <Box>
          <img src={imageIcon1} alt={`Icon `} />
        </Box>
        <Box>
          <Typography variant="h4" component="h4" sx={{ mb: 1 }}>
            Ultra
          </Typography>
          <Typography variant="h5" component="h5">
            $10/mo
          </Typography>
        </Box>
      </Plan>
    </ThemeProvider>
  ),
};
