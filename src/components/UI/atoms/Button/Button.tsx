import React from 'react';

import classNames from 'classnames';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary';
  className?: string;
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={classNames(
        className,
        'bg-primary text-white rounded-[4px] px-[20px] py-[14px]',
      )}
    >
      {children}
    </button>
  );
};

export default Button;
