import React from 'react';
import { useLogout } from '../../hooks/useLogout';

const LogoutButton: React.FC = () => {
  const { logout } = useLogout();

  return (
    <button
      className="bg-red-500 text-white px-4 py-2 rounded ml-2 whitespace-nowrap"
      onClick={() => logout(true)}
    >
      로그아웃
    </button>
  );
};

export default LogoutButton;