import type { Meta, StoryObj } from '@storybook/react';

import GeovisorMap from './GeovisorMap';

const meta: Meta<typeof GeovisorMap> = {
  title: 'home/GeovisorMap',
  component: GeovisorMap,
};

export default meta;
type Story = StoryObj<typeof GeovisorMap>;

export const ButtonDefault: Story = {
  args: {},
};
