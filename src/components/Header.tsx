import { FC, ReactNode } from 'react';

interface HeaderProps {
  title: string;
  icon?: ReactNode;
}

const Header: FC<HeaderProps> = ({ title, icon }) => {
  return (
    <header className="flex justify-between justify-items-center">
      <div className="text-base font-semibold">{title}</div>
      <div>{icon}</div>
    </header>
  );
};

export default Header;
