import React, { ReactElement } from 'react';

import HomeLayout from '@components/layout/HomeLayout';
import HomeTemplate from '@components/modules/home/components/UI/templates/HomeTemplate';

const HomePage = () => {
  return (
    <div>
      <HomeTemplate />
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default HomePage;
