import React from 'react';
import classNames from 'classnames';

interface H3Props {
	children?: React.ReactNode;
	strong?: boolean; 
	className?: string
}

const H3 = ({ children, strong = false, className }: H3Props) => {
	return (
    <h3
      className={classNames(
				className,
        'text-[32px] leading-[48px]',
        { 'font-normal': !strong },
        { 'font-semibold': strong }
      )}
    >
      {children}
    </h3>
  )
}

export default H3
