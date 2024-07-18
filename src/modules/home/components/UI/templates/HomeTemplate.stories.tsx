import type { Meta, StoryObj } from '@storybook/react';

import HomeTemplate from './HomeTemplate';

const meta: Meta<typeof HomeTemplate> = {
  title: 'home/HomeTemplate',
  component: HomeTemplate,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof HomeTemplate>;

export const Default: Story = {
  args: {
    dynamicTitle: 'Test Title',
    showInstagram: false,
  },
};
