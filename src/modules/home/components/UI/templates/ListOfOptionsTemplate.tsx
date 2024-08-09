import React from 'react';

import { CheckedState } from '@radix-ui/react-checkbox';

import LayerGroupIcon from '@components/components/UI/atoms/Icons/LayerGroupIcon';
import MapIcon from '@components/components/UI/atoms/Icons/MapIcon';

import ListOfOptionsDrawer, {
  CheckboxProps,
} from '../organisms/ListOfOptionsDrawer';
import ListOfOptionsSheet from '../organisms/ListOfOptionsSheet';

interface Props {
  layers: CheckboxProps[];
  maps: CheckboxProps[];
  // eslint-disable-next-line no-unused-vars
  onCheckedChange: (id: string, checked: CheckedState) => void;
}

const ListOfOptionsTemplate = ({ layers, maps, onCheckedChange }: Props) => {
  return (
    <div className="w-full bg-white opacity-75">
      <div className="flex items-center justify-between gap-4 max-w-[1440px]">
        <div className="text-ocean-green font-bold text-lg p-2">INAGIEM</div>
        <div className="flex justify-end gap-4">
          <ListOfOptionsSheet
            title="Lista de capas"
            options={layers}
            onCheckedChange={onCheckedChange}
          >
            <button className="sm:flex sm:gap-2 sm:items-center hidden text-[#088a8a]">
              <LayerGroupIcon className="w-5 h-5" />
              Lista de capas
            </button>
          </ListOfOptionsSheet>
          <ListOfOptionsDrawer
            title="Lista de capas"
            options={layers}
            onCheckedChange={onCheckedChange}
          >
            <button className="flex gap-2 items-center sm:hidden">
              <LayerGroupIcon className="w-5 h-5 " />
            </button>
          </ListOfOptionsDrawer>
          <ListOfOptionsSheet
            title="Mapas base"
            options={maps}
            onCheckedChange={onCheckedChange}
          >
            <button className="sm:flex sm:gap-2 sm:items-center hidden text-ocean-green">
              <MapIcon className="w-5 h-5 " />
              Mapas base
            </button>
          </ListOfOptionsSheet>
          <ListOfOptionsDrawer
            title="Mapas base"
            options={maps}
            onCheckedChange={onCheckedChange}
          >
            <button className="flex gap-2 items-center sm:hidden">
              <MapIcon className="w-5 h-5 " />
            </button>
          </ListOfOptionsDrawer>
        </div>
      </div>
    </div>
  );
};

export default ListOfOptionsTemplate;
