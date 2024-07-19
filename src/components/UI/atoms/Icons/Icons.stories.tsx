import type { Meta, StoryObj } from '@storybook/react';

import Icons from './Icons';

const meta: Meta<typeof Icons> = {
  title: 'Atoms/Icons',
  component: Icons,
};

export default meta;
type Story = StoryObj<typeof Icons>;

export const Default: Story = {
  args: {},
};
