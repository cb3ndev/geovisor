import React from 'react';
import classNames from 'classnames';

interface H2Props {
	children?: React.ReactNode;
	strong?: boolean; 
	className?: string
}

const H2 = ({ children, strong = false, className }: H2Props) => {
	return (
    <h2
      className={classNames(
				className,
        'text-[44px] leading-[66px]',
        { 'font-normal': !strong },
        { 'font-semibold': strong }
      )}
    >
      {children}
    </h2>
  )
}

export default H2