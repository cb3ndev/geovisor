import React from 'react';

interface Props {
  showInstagram?: boolean;
}

const SocialMediaSection = ({ showInstagram }: Props) => {
  return (
    <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="flex justify-center px-2 py-4 bg-blue-400">Facebook</div>
      <div className="flex justify-center px-2 py-4 bg-blue-400">Facebook</div>
      <div className="flex justify-center px-2 py-4 bg-blue-400">Facebook</div>
      {showInstagram && (
        <div className="flex justify-center px-2 py-4 bg-blue-400">
          Instagram
        </div>
      )}
    </div>
  );
};

export default SocialMediaSection;
