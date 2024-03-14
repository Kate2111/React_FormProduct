import { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClick, ...props }) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className="bg-transparent min-w-[178px] max-w-[220px] h-11 border-gray-200 border-[1px] rounded-[40px] px-4 py-5 text-black flex items-center justify-center hover:bg-violet-200">
      {children}
    </button>
  );
};

export default Button;
