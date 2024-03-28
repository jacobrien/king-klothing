import { FC, ButtonHTMLAttributes } from 'react';
import './button.scss';

export type ButtonProps = {
  buttontype?: string;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttontype = 'base',
  isLoading = false,
  ...options
}) => {
  return (
    <button
      className={`button-container ${buttontype}`}
      disabled={isLoading}
      {...options}
    >
      {isLoading ? <div className="loading-spinner" /> : children}
    </button>
  );
};

export default Button;
