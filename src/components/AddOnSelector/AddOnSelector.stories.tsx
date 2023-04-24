import React from 'react';
import { StoryObj } from '@storybook/react';
import type { Meta } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';
import AddOnSelector from './AddOnSelector';

const meta = {
  title: 'Molecules/AddOnSelector',
  component: AddOnSelector,
  tags: ['autodocs'],
} satisfies Meta<typeof AddOnSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

const addOnsList = [
  {
    title: 'Online service',
    subtitle: 'Access to multiplayer games',
    price: '+$1/mo',
    id: 1,
  },
  {
    title: 'Larger storage',
    subtitle: 'Extra 1TB of cloud save',
    price: '+$2/mo',
    id: 2,
  },
  {
    title: 'Customizable Profile',
    subtitle: 'Custom theme on your profile',
    price: '+$2/mo',
    id: 3,
  },
];

export const Default: Story = {
  render: () => (
    <ThemeProvider theme={theme}>
      <AddOnSelector options={addOnsList} />
    </ThemeProvider>
  ),
};
