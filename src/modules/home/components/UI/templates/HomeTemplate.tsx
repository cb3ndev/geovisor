import React from 'react';

import HeroSection from '../organisms/HeroSection/HeroSection';
import SocialMediaSection from '../organisms/SocialMediaSection/SocialMediaSection';

interface Props {
  dynamicTitle: string;
  showInstagram?: boolean;
}

const HomeTemplate = ({ dynamicTitle, showInstagram }: Props) => {
  return (
    <div>
      <h2 className="text-2xl mb-4">{dynamicTitle}</h2>
      <HeroSection />
      <div className="mt-4">
        <SocialMediaSection showInstagram={showInstagram} />
      </div>
    </div>
  );
};

export default HomeTemplate;
