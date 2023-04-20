import type { Meta, StoryObj } from '@storybook/react';

import { Hello } from './Hello';

const meta = {
  title: 'Atoms/Hello',
  component: Hello,
  tags: ['autodocs'],
} satisfies Meta<typeof Hello>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};
