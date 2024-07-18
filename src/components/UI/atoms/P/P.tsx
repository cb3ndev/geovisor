import React from 'react';
import classNames from 'classnames';

interface PProps {
	children?: React.ReactNode;
	strong?: boolean; 
	variant?: 'normal' | 's' | 'xs';
	className?: string
}

const P = ({ children, strong = false, variant = 'normal', className }: PProps) => {
	return (
    <p
      className={classNames(
				className,
        { 'text-[18px] leading-[27px]': variant === 'normal' },
        { 'text-[14px] leading-[21px]': variant === 's' },
        { 'text-[10px] leading-[15px]': variant === 'xs' },
        { 'font-normal': !strong },
        { 'font-semibold': strong }
      )}
    >
      {children}
    </p>
  )
}

export default P 


