import React from 'react';

import { CheckedState } from '@radix-ui/react-checkbox';

import {
  Checkbox,
  CheckboxIndicator,
} from '@components/components/UI/atoms/Checkbox';
import CheckIcon from '@components/components/UI/atoms/Icons/CheckIcon';
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from '@components/components/UI/organisms/Drawer';

export interface CheckboxProps {
  id: string;
  label?: string;
  checked: boolean;
}

interface Props {
  title: string;
  options: CheckboxProps[];
  // eslint-disable-next-line no-unused-vars
  onCheckedChange: (id: string, checked: CheckedState) => void;
  children?: React.ReactNode;
}

const ListOfOptionsDrawer = ({
  title,
  children,
  options,
  onCheckedChange,
}: Props) => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerPortal>
          <DrawerOverlay />
          <DrawerContent>
            <div className="p-4 bg-white rounded-t-[10px] flex-1 h-full">
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
              <div className="max-w-md mx-auto">
                <DrawerTitle>{title}</DrawerTitle>
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
          </DrawerContent>
        </DrawerPortal>
      </Drawer>
    </div>
  );
};

export default ListOfOptionsDrawer;
