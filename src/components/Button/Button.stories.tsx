import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';

import { Button } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  render: (args) => (
    <ThemeProvider theme={theme}>
      <Button {...args} size="large">
        Next Step
      </Button>
    </ThemeProvider>
  ),
};
