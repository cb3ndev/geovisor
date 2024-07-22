import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
  Sheet,
  SheetContent,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from './Sheet';

const SheetDefault = () => {
  return (
    <Sheet direction="left">
      <SheetTrigger asChild>
        <button>Open Sheet</button>
      </SheetTrigger>
      <SheetPortal>
        <SheetOverlay />
        <SheetContent side="left">
          <div className="p-4 bg-white flex-1 h-full">
            <div className="max-w-md mx-auto">
              <SheetTitle>Unstyled drawer for React.</SheetTitle>
              <p className="text-zinc-600 mb-2">
                This component can be used as a replacement for a Dialog on
                mobile and tablet devices.
              </p>
              <p className="text-zinc-600 mb-8">
                It uses{' '}
                <a
                  href="https://www.radix-ui.com/docs/primitives/components/dialog"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Radix&rsquo;s Dialog primitive
                </a>{' '}
                under the hood and is inspired by{' '}
                <a
                  href="https://twitter.com/devongovett/status/1674470185783402496"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  this tweet.
                </a>
              </p>
            </div>
          </div>
        </SheetContent>
      </SheetPortal>
    </Sheet>
  );
};

const meta: Meta<typeof SheetDefault> = {
  title: 'Organisms/SheetDefault',
  component: SheetDefault,
};

export default meta;
type Story = StoryObj<typeof SheetDefault>;

export const SheetRight: Story = {
  args: {},
};
