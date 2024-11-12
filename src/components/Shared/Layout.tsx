import React from 'react';
import { Outlet } from 'react-router-dom';
import Title from 'src/components/Shared/Title.tsx';

const Layout: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <div>
        <Title text="MOTUS" />
      </div>

      <Outlet />
    </div>
  );
};

export default Layout;
