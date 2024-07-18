import type { Meta, StoryObj } from '@storybook/react';

import Breadcrumbs from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Molecules/Breadcrumbs',
  component: Breadcrumbs,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const BreadcrumbsNormal: Story = {};
