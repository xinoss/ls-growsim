import { useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import { logout } from '../utils/authUtils';

const Login = () => {
  useEffect(() => {
    logout(false);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <LoginForm />
    </div>
  );
};

export default Login;