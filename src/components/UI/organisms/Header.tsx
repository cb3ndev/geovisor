import React from 'react';

import {
  Sheet,
  SheetContent,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from '@components/components/UI/organisms/Sheet';

const Header = () => {
  return (
    <header className="sticky top-0 flex h-[57px] items-center justify-between gap-2 border-b bg-background px-4">
      <h1 className="font-bold flex md:hidden">LOGO</h1>
      <div className="hidden md:flex md:gap-8">
        <h1 className="font-bold flex">LOGO</h1>
        <Sheet direction="right">
          <SheetTrigger asChild>
            <button>Lista de capas</button>
          </SheetTrigger>
          <SheetPortal>
            <SheetOverlay />
            <SheetContent side="right">
              <div className="p-4 bg-white flex-1 h-full">
                <div className="max-w-md mx-auto">
                  <SheetTitle>Lista de capas</SheetTitle>
                </div>
              </div>
            </SheetContent>
          </SheetPortal>
        </Sheet>
        <Sheet direction="right">
          <SheetTrigger asChild>
            <button>Mapas base</button>
          </SheetTrigger>
          <SheetPortal>
            <SheetOverlay />
            <SheetContent side="right">
              <div className="p-4 bg-white flex-1 h-full">
                <div className="max-w-md mx-auto">
                  <SheetTitle>Mapas base</SheetTitle>
                </div>
              </div>
            </SheetContent>
          </SheetPortal>
        </Sheet>
      </div>
      <div>
        <form>
          <input
            placeholder="Search..."
            className="border rounded-md px-2 py-[6px] w-full"
            type="text"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
