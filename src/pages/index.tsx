import React, { ReactElement } from 'react';

import HomeLayout from '@components/layout/HomeLayout';
import ListOfOptionsTemplate from '@components/modules/home/components/UI/templates/ListOfOptionsTemplate';

interface CheckboxProps {
  id: string;
  label?: string;
  checked: boolean;
  onCheckedChange?: () => void;
}

const LAYERS: CheckboxProps[] = [
  { id: 'c1', label: 'Layer 1', checked: false },
  { id: 'c2', label: 'Layer 2', checked: false },
  { id: 'c3', label: 'Layer 3', checked: false },
  { id: 'c4', label: 'Layer 4', checked: false },
];

const MAPS: CheckboxProps[] = [
  { id: 'm1', label: 'Map 1', checked: true },
  { id: 'm2', label: 'Map 2', checked: true },
  { id: 'm3', label: 'Map 3', checked: false },
  { id: 'm4', label: 'Map 4', checked: false },
];

const HomePage = () => {
  return (
    <div>
      <ListOfOptionsTemplate
        layers={LAYERS}
        maps={MAPS}
        onCheckedChange={() => {}}
      />
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default HomePage;
