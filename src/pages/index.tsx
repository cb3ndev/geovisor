import React from 'react';

import HomeTemplate from '@components/modules/home/components/UI/templates/HomeTemplate';
import { useHome } from '@components/modules/home/hooks/useHome';

const HomePage = () => {
  const { dynamicTitle, showInstagram } = useHome();

  return (
    <div>
      <HomeTemplate dynamicTitle={dynamicTitle} showInstagram={showInstagram} />
    </div>
  );
};

export default HomePage;
