import type { Meta, StoryObj } from '@storybook/react';

import SocialMediaSection from './SocialMediaSection';

const meta: Meta<typeof SocialMediaSection> = {
  title: 'home/SocialMediaSection',
  component: SocialMediaSection,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SocialMediaSection>;

export const Default: Story = {
  args: {
    showInstagram: false,
  },
};
