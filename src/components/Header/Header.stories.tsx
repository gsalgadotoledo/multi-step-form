import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';

import { Header } from './Header';

const meta = {
  title: 'Molecules/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ThemeProvider theme={theme}>
      <Header {...args} title="Title" subtitle="Subtitle" />
    </ThemeProvider>
  ),
};
