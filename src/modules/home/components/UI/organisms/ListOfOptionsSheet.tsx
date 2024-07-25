import React from 'react';

import { CheckedState } from '@radix-ui/react-checkbox';

import {
  Checkbox,
  CheckboxIndicator,
} from '@components/components/UI/atoms/Checkbox';
import CheckIcon from '@components/components/UI/atoms/Icons/CheckIcon';
import {
  Sheet,
  SheetContent,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from '@components/components/UI/organisms/Sheet';

import { CheckboxProps } from './ListOfOptionsDrawer';

interface Props {
  title: string;
  options: CheckboxProps[];
  // eslint-disable-next-line no-unused-vars
  onCheckedChange: (id: string, checked: CheckedState) => void;
  children?: React.ReactNode;
}

const ListOfOptionsSheet = ({
  title,
  options,
  onCheckedChange,
  children,
}: Props) => {
  return (
    <Sheet direction="right">
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetPortal>
        <SheetOverlay />
        <SheetContent side="right">
          <div className="p-4 bg-white flex-1 h-full">
            <div className="max-w-md mx-auto">
              <SheetTitle>{title}</SheetTitle>
              <form>
                {options.map((option) => (
                  <div key={option.id} className="flex items-center gap-2">
                    <Checkbox
                      id={option.id}
                      checked={option.checked}
                      onCheckedChange={(check) =>
                        onCheckedChange(option.id, check)
                      }
                    >
                      <CheckboxIndicator>
                        <CheckIcon className="w-4 h-4 fill-white" />
                      </CheckboxIndicator>
                    </Checkbox>
                    <label htmlFor={option.id}>{option.label}</label>
                  </div>
                ))}
              </form>
            </div>
          </div>
        </SheetContent>
      </SheetPortal>
    </Sheet>
  );
};

export default ListOfOptionsSheet;
