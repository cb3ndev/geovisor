import React from 'react';

import cn from 'classnames';
import { Drawer as DrawerPrimitive } from 'vaul';

export const Drawer = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Root>
>((props) => <DrawerPrimitive.Root {...props} />);

Drawer.displayName = 'Drawer';

export const DrawerTrigger = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Trigger>
>((props, forwardedRef) => (
  <DrawerPrimitive.Trigger {...props} ref={forwardedRef} />
));

DrawerTrigger.displayName = 'DrawerTrigger';

export const DrawerPortal = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Portal>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Portal>
>((props) => <DrawerPrimitive.Portal {...props} />);

DrawerPortal.displayName = 'DrawerPortal';

export const DrawerClose = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Close>
>((props) => <DrawerPrimitive.Close {...props} />);

DrawerClose.displayName = 'DrawerClose';

export const DrawerOverlay = React.forwardRef<
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

DrawerOverlay.displayName = 'DrawerOverlay';

export const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> & {
    className?: string;
  }
>(({ className, ...props }, forwardedRef) => (
  <DrawerPrimitive.Content
    {...props}
    className={cn(
      'bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0 z-20',
      className,
    )}
    ref={forwardedRef}
  />
));

DrawerContent.displayName = 'DrawerContent';

export const DrawerTitle = React.forwardRef<
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

DrawerTitle.displayName = 'DrawerTitle';
