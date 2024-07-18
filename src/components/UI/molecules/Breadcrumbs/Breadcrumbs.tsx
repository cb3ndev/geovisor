import React from 'react';

import Image from 'next/image';

import P from '../../atoms/P/P';

interface IBreadcrumbs {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Breadcrumbs = ({ ...props }: IBreadcrumbs) => {
  return (
    <div className="flex gap-2 items-center text-[#5A5A5F]">
      <button type="button" {...props}>
        <P variant="s" strong>
          Breadcrumbs 1{' '}
        </P>
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
