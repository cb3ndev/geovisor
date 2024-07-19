import React from 'react';

import Image from 'next/image';

interface IBreadcrumbs {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Breadcrumbs = ({ ...props }: IBreadcrumbs) => {
  return (
    <div className="font-poppins flex gap-2 items-center text-[#5A5A5F]">
      <button type="button" {...props}>
        Breadcrumbs 1{' '}
      </button>
      <Image
        src="/arrowRight.svg"
        alt="Arrow Right"
        className="text-bold"
        width={9}
        height={9}
        priority
      />
    </div>
  );
};

export default Breadcrumbs;
