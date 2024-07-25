import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import LayerGroupIcon from '@components/components/UI/atoms/Icons/LayerGroupIcon';

import { CheckboxProps } from './ListOfOptionsDrawer';
import ListOfOptionsSheet from './ListOfOptionsSheet';

const LAYERS: CheckboxProps[] = [
  { id: 'c1', label: 'Layer 1', checked: false },
  { id: 'c2', label: 'Layer 2', checked: false },
  { id: 'c3', label: 'Layer 3', checked: false },
  { id: 'c4', label: 'Layer 4', checked: false },
];

const meta: Meta<typeof ListOfOptionsSheet> = {
  title: 'home/ListOfOptionsSheet',
  component: ListOfOptionsSheet,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export default meta;
type Story = StoryObj<typeof ListOfOptionsSheet>;

export const Default: Story = {
  args: {
    title: 'Lista de capas',
    options: LAYERS,
    children: (
      <button className="md:flex md:gap-2 md:items-center hidden">
        <LayerGroupIcon className="w-5 h-5 " />
        Lista de capas
      </button>
    ),
  },
};
