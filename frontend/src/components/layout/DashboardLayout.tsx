import React from 'react';
import HeaderNav from './HeaderNav';
import { Outlet } from 'react-router-dom';

const DashboardLayout: React.FC = () => {
  return (
    <div>
      <HeaderNav />
      <main className="pt-[80px] h-screen overflow-hidden bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;