import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
import theme from '../../theme';

import { ContentBox } from './ContentBox';
const meta = {
  title: 'Molecules/ContentBox',
  component: ContentBox,
  tags: ['autodocs'],
} satisfies Meta<typeof ContentBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithChildren: Story = {
  args: { children: 'lorem ipsum' },
  render: (args) => (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          background: '#EFF5FF',
          pt: 4,
          minWidth: '100%',
          minHeight: '300px',
        }}
      >
        <ContentBox {...args}>{args.children}</ContentBox>
      </Box>
    </ThemeProvider>
  ),
};
