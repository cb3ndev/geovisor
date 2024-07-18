import React from 'react';
import classNames from 'classnames';

interface H4Props {
	children?: React.ReactNode;
	strong?: boolean; 
	className?: string
}

const H4 = ({ children, strong = false, className }: H4Props) => {
	return (
    <h4
      className={classNames(
				className,
        'text-[24px] leading-[24px]',
        { 'font-normal': !strong },
        { 'font-semibold': strong }
      )}
    >
      {children}
    </h4>
  )
}

export default H4

