import type { Meta, StoryObj } from '@storybook/react';

import ListOfOptionsTemplate from './ListOfOptionsTemplate';

interface CheckboxProps {
  id: string;
  label?: string;
  checked: boolean;
  onCheckedChange?: () => void;
}

const LAYERS: CheckboxProps[] = [
  { id: 'c1', label: 'Layer 1', checked: true },
  { id: 'c2', label: 'Layer 2', checked: true },
  { id: 'c3', label: 'Layer 3', checked: false },
  { id: 'c4', label: 'Layer 4', checked: false },
];

const MAPS: CheckboxProps[] = [
  { id: 'm1', label: 'Map 1', checked: true },
  { id: 'm2', label: 'Map 2', checked: true },
  { id: 'm3', label: 'Map 3', checked: false },
  { id: 'm4', label: 'Map 4', checked: false },
];

const meta: Meta<typeof ListOfOptionsTemplate> = {
  title: 'home/ListOfOptionsTemplate',
  component: ListOfOptionsTemplate,
  tags: ['autodocs'],
  argTypes: {},
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export default meta;
type Story = StoryObj<typeof ListOfOptionsTemplate>;

export const Default: Story = {
  args: {
    layers: LAYERS,
    maps: MAPS,
  },
};
