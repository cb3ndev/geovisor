import React, { ReactElement } from 'react';

import HomeLayout from '@components/layout/HomeLayout';
import HomeTemplate from '@components/modules/home/components/UI/templates/HomeTemplate';

const HomePage = () => {
  return (
    <div>
      <HomeTemplate
        renderListOfLayers={
          <div>
            <ul>
              <li>Layer 1</li>
              <li>Layer 2</li>
              <li>Layer 3</li>
              <li>Layer 4</li>
            </ul>
          </div>
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
