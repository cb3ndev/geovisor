import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import LayerGroupIcon from '@components/components/UI/atoms/Icons/LayerGroupIcon';

import ListOfOptionsDrawer, { CheckboxProps } from './ListOfOptionsDrawer';

const LAYERS: CheckboxProps[] = [
  { id: 'c1', label: 'Layer 1', checked: false },
  { id: 'c2', label: 'Layer 2', checked: false },
  { id: 'c3', label: 'Layer 3', checked: false },
  { id: 'c4', label: 'Layer 4', checked: false },
];

const meta: Meta<typeof ListOfOptionsDrawer> = {
  title: 'home/ListOfOptionsDrawer',
  component: ListOfOptionsDrawer,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export default meta;
type Story = StoryObj<typeof ListOfOptionsDrawer>;

export const Default: Story = {
  args: {
    title: 'Lista de capas',
    options: LAYERS,
    children: (
      <button className="flex gap-2 items-center md:hidden">
        <LayerGroupIcon className="w-5 h-5 " />
      </button>
    ),
  },
};
