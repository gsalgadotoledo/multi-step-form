import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';

import { StepsList } from './StepsList';
const meta = {
  title: 'Organism/StepsList',
  component: StepsList,
  tags: ['autodocs'],
} satisfies Meta<typeof StepsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ThemeProvider theme={theme}>
      <StepsList {...args} />
    </ThemeProvider>
  ),
};
