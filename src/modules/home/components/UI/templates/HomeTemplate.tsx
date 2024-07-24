import React from 'react';

import LayerGroupIcon from '@components/components/UI/atoms/Icons/LayerGroupIcon';
import MapIcon from '@components/components/UI/atoms/Icons/MapIcon';
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from '@components/components/UI/organisms/Drawer';
import {
  Sheet,
  SheetContent,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from '@components/components/UI/organisms/Sheet';

interface Props {
  renderListOfLayers: React.ReactNode;
  renderListOfBaseMaps: React.ReactNode;
  renderMap?: React.ReactNode;
}

const HomeTemplate = ({
  renderListOfLayers,
  renderListOfBaseMaps,
  renderMap,
}: Props) => {
  return (
    <div className="max-w-[1440px]">
      <div className="sm:flex sm:justify-end sm:gap-8 sm:p-4 hidden">
        <Sheet direction="right">
          <SheetTrigger asChild>
            <button className="flex gap-2 items-center">
              <LayerGroupIcon className="w-5 h-5 " />
              Lista de capas
            </button>
          </SheetTrigger>
          <SheetPortal>
            <SheetOverlay />
            <SheetContent side="right">
              <div className="p-4 bg-white flex-1 h-full">
                <div className="max-w-md mx-auto">
                  <SheetTitle>Lista de capas</SheetTitle>
                  {renderListOfLayers}
                </div>
              </div>
            </SheetContent>
          </SheetPortal>
        </Sheet>
        <Sheet direction="right">
          <SheetTrigger asChild>
            <button className="flex gap-2 items-center">
              <MapIcon className="w-5 h-5 " />
              Mapas base
            </button>
          </SheetTrigger>
          <SheetPortal>
            <SheetOverlay />
            <SheetContent side="right">
              <div className="p-4 bg-white flex-1 h-full">
                <div className="max-w-md mx-auto">
                  <SheetTitle>Mapas base</SheetTitle>
                  {renderListOfBaseMaps}
                </div>
              </div>
            </SheetContent>
          </SheetPortal>
        </Sheet>
      </div>
      <div className="flex justify-end gap-8 p-4 sm:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <button className="flex gap-2 items-center">
              <LayerGroupIcon className="w-5 h-5 " />
            </button>
          </DrawerTrigger>
          <DrawerPortal>
            <DrawerOverlay />
            <DrawerContent>
              <div className="p-4 bg-white rounded-t-[10px] flex-1 h-full">
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                <div className="max-w-md mx-auto">
                  <DrawerTitle>Lista de capas</DrawerTitle>
                  {renderListOfLayers}
                </div>
              </div>
            </DrawerContent>
          </DrawerPortal>
        </Drawer>
        <Drawer>
          <DrawerTrigger asChild>
            <button className="flex gap-2 items-center">
              <MapIcon className="w-5 h-5 " />
            </button>
          </DrawerTrigger>
          <DrawerPortal>
            <DrawerOverlay />
            <DrawerContent>
              <div className="p-4 bg-white rounded-t-[10px] flex-1 h-full">
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                <div className="max-w-md mx-auto">
                  <DrawerTitle>Mapas base</DrawerTitle>
                  {renderListOfBaseMaps}
                </div>
              </div>
            </DrawerContent>
          </DrawerPortal>
        </Drawer>
      </div>
      <div>{renderMap}</div>
    </div>
  );
};

export default HomeTemplate;
