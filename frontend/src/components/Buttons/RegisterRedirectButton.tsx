import React from 'react';
import { useIsAdmin } from '../../hooks/useIsAdmin';
import { useNavigate } from 'react-router-dom';

const RegisterRedirectButton: React.FC = () => {
  const isAdmin = useIsAdmin();
  const navigate = useNavigate();

  if (!isAdmin) return null;

  const handleClick = () => {
    navigate('/register');
  };

  return (
    <button
      className="bg-purple-500 text-white px-4 py-2 rounded ml-2 whitespace-nowrap"
      onClick={handleClick}
    >
      회원가입
    </button>
  );
};

export default RegisterRedirectButton;