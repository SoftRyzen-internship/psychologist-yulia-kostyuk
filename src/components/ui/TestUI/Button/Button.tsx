import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from './types';

export const Button:  React.FC<ButtonProps> = ({   
  tag: Tag = 'a',
  accent = true,
  children,
  href,
  buttonType,
  onClick,
  disabled = false,
  className,
}) => {
  
  const btnStyles = classNames(
    'cursor-pointer block text-center w-full text-white',
    {
      'py-4 px-12 max-w-80 bg-accent xl:max-w-[198px]':
        accent === true,
      'hover:bg-hover focus:bg-hover active:bg-pressed':
        accent === true,
      'py-3 px-6 max-w-80 bg-transparent border-solid border-accent xl:max-w-[187px]':
        accent === false,
      'hover:bg-hsla(0, 0%, 16%, 0.04) focus:bg-hsla(0, 0%, 16%, 0.04) active:bg-hsla(0, 0%, 16%, 0.08)':
        accent === false
    },
    className,
  );

  return (
    <Tag
      onClick={(e: React.MouseEvent) => {
          if (onClick) onClick();

          if (buttonType === 'submit' && onClick) onClick();
      }}
      href={href}
      type={buttonType}
      className={className ? `${btnStyles} ${className}` : btnStyles}
      disabled={disabled}
    >
      {children}
    </Tag>
  );
};
