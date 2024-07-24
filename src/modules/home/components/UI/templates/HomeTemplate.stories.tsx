import React from 'react';

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
    renderListOfLayers: (
      <div>
        <ul>
          <li>Layer 1</li>
          <li>Layer 2</li>
          <li>Layer 3</li>
          <li>Layer 4</li>
        </ul>
      </div>
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
