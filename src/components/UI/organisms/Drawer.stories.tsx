import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from './Drawer';

const DrawerDefault = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button>Open DrawerPrimitive</button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent>
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-md mx-auto">
              <DrawerTitle>Unstyled drawer for React.</DrawerTitle>
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
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

const meta: Meta<typeof DrawerDefault> = {
  title: 'Organisms/Drawer',
  component: DrawerDefault,
};

export default meta;
type Story = StoryObj<typeof DrawerDefault>;

export const Default: Story = {
  args: {},
};
