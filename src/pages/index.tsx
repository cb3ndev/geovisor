import React, { ReactElement } from 'react';

import {
  Checkbox,
  CheckboxIndicator,
} from '@components/components/UI/atoms/Checkbox';
import CheckIcon from '@components/components/UI/atoms/Icons/CheckIcon';
import HomeLayout from '@components/layout/HomeLayout';
import HomeTemplate from '@components/modules/home/components/UI/templates/HomeTemplate';

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

const HomePage = () => {
  return (
    <div>
      <HomeTemplate
        renderListOfLayers={
          <form>
            {LAYERS.map((layer) => (
              <div key={layer.id} className="flex items-center gap-2">
                <Checkbox id={layer.id} checked={layer.checked}>
                  <CheckboxIndicator>
                    <CheckIcon className="w-4 h-4 fill-white" />
                  </CheckboxIndicator>
                </Checkbox>
                <label htmlFor="c1">{layer.label}</label>
              </div>
            ))}
          </form>
        }
        renderListOfBaseMaps={
          <div>
            <ul>
              <li>Map 1</li>
              <li>Map 2</li>
              <li>Map 3</li>
              <li>Map 4</li>
            </ul>
          </div>
        }
        renderMap={<h1>This is a map</h1>}
      />
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default HomePage;
