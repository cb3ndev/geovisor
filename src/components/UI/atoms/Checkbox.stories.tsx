import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox, CheckboxIndicator } from './Checkbox';
import CheckIcon from './Icons/CheckIcon';

interface Props {
  id: string;
  label?: string;
  checked: boolean;
  onCheckedChange?: () => void;
}

const CheckboxDefault = ({ id, label, checked, onCheckedChange }: Props) => {
  return (
    <form className="flex items-center gap-2">
      <Checkbox id={id} checked={checked} onCheckedChange={onCheckedChange}>
        <CheckboxIndicator>
          <CheckIcon className="w-4 h-4 fill-white" />
        </CheckboxIndicator>
      </Checkbox>
      <label htmlFor={id}>{label}</label>
    </form>
  );
};

const meta: Meta<typeof CheckboxDefault> = {
  title: 'Atoms/Checkbox',
  component: CheckboxDefault,
  tags: ['autodocs'],
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export default meta;
type Story = StoryObj<typeof CheckboxDefault>;

export const Default: Story = {
  args: {
    id: 'c1',
    label: 'Layer 1',
    checked: true,
  },
};
