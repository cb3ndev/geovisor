import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
  Checkbox,
  CheckboxIndicator,
} from '@components/components/UI/atoms/Checkbox';
import CheckIcon from '@components/components/UI/atoms/Icons/CheckIcon';

import HomeTemplate from './HomeTemplate';

interface CheckboxProps {
  id: string;
  label?: string;
  checked: boolean;
  onCheckedChange?: () => void;
}

const LAYERS: CheckboxProps[] = [
  { id: 'c1', label: 'Checkbox 1', checked: true },
  { id: 'c2', label: 'Checkbox 2', checked: true },
  { id: 'c3', label: 'Checkbox 3', checked: false },
  { id: 'c4', label: 'Checkbox 4', checked: false },
];

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
    renderListOfLayers: (
      <form>
        {LAYERS.map((layer) => (
          <div key={layer.id} className="flex items-center gap-2">
            <Checkbox id={layer.id} checked={layer.checked}>
              <CheckboxIndicator>
                <CheckIcon className="w-4 h-4 fill-white" />
              </CheckboxIndicator>
            </Checkbox>
            <label htmlFor="c1">{layer.label}</label>
          </div>
        ))}
      </form>
    ),
    renderListOfBaseMaps: (
      <div>
        <ul>
          <li>Map 1</li>
          <li>Map 2</li>
          <li>Map 3</li>
          <li>Map 4</li>
        </ul>
      </div>
    ),
    renderMap: <h1>This is a map</h1>,
  },
};
