import React from 'react';
import classNames from 'classnames';

interface H1Props {
	children?: React.ReactNode;
	strong?: boolean; 
	className?: string
}

const H1 = ({ children, strong = false, className }: H1Props) => {
	return (
    <h1
      className={classNames(
				className,
        'text-[58px] leading-[87px]',
        { 'font-normal': !strong },
        { 'font-semibold': strong }
      )}
    >
      {children}
    </h1>
  )
}

export default H1