import React from 'react';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import cn from 'classnames';

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    className?: string;
  }
>(({ className, ...props }, forwardedRef) => (
  <CheckboxPrimitive.Root
    {...props}
    className={cn(
      'flex items-center justify-center w-5 h-5 rounded border-2 checked:bg-green-500',
      className,
    )}
    ref={forwardedRef}
  />
));

Checkbox.displayName = 'Checkbox';

export const CheckboxIndicator = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Indicator> & {
    className?: string;
  }
>(({ className, ...props }, forwardedRef) => (
  <CheckboxPrimitive.Indicator
    className={cn('rounded-sm bg-[#31BCA8]', className)}
    {...props}
    ref={forwardedRef}
  />
));

CheckboxIndicator.displayName = 'CheckboxIndicator';
