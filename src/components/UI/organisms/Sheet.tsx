import React from 'react';

import cn from 'classnames';
import { Drawer as DrawerPrimitive } from 'vaul';

export const Sheet = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Root>
>((props) => <DrawerPrimitive.Root {...props} />);

Sheet.displayName = 'Sheet';

export const SheetTrigger = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Trigger>
>((props, forwardedRef) => (
  <DrawerPrimitive.Trigger {...props} ref={forwardedRef} />
));

SheetTrigger.displayName = 'SheetTrigger';

export const SheetPortal = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Portal>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Portal>
>((props) => <DrawerPrimitive.Portal {...props} />);

SheetPortal.displayName = 'SheetPortal';

export const SheetClose = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Close>
>((props) => <DrawerPrimitive.Close {...props} />);

SheetClose.displayName = 'SheetClose';

export const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> & {
    className?: string;
  }
>(({ className, ...props }, forwardedRef) => (
  <DrawerPrimitive.Overlay
    {...props}
    className={cn('fixed inset-0 bg-black/40', className)}
    ref={forwardedRef}
  />
));

SheetOverlay.displayName = 'SheetOverlay';

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> & {
    className?: string;
    side: 'left' | 'right';
  }
>(({ className, side, ...props }, forwardedRef) => (
  <DrawerPrimitive.Content
    {...props}
    className={cn(
      'bg-white flex flex-col rounded-t-[10px] h-full w-[80%] md:w-[400px] mt-24 fixed bottom-0 z-20',
      className,
      { 'right-0': side === 'right' },
      { 'left-0': side === 'left' },
    )}
    ref={forwardedRef}
  />
));

SheetContent.displayName = 'SheetContent';

export const SheetTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title> & {
    className?: string;
  }
>(({ className, ...props }, forwardedRef) => (
  <DrawerPrimitive.Title
    className={cn('font-medium mb-4', className)}
    ref={forwardedRef}
    {...props}
  />
));

SheetTitle.displayName = 'SheetTitle';
