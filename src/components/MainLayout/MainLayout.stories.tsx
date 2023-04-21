import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
import theme from '../../theme';

import { MainLayout } from './MainLayout';
const meta = {
  title: 'Organism/MainLayout',
  component: MainLayout,
  tags: ['autodocs'],
} satisfies Meta<typeof MainLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'lorem ipsum' },
  render: () => (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          background: '#EFF5FF',
          py: 6,
          minWidth: '100%',
          minHeight: '300px',
        }}
      >
        <MainLayout />
      </Box>
    </ThemeProvider>
  ),
};
