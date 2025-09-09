import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginRequest } from '../services/authAPI';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = async (username: string, password: string) => {
    setLoading(true);
    setError('');
    try {
      const res = await loginRequest(username, password);
      const accessToken = res.data.accessToken;

      sessionStorage.setItem('accessToken', accessToken);
      navigate('/admin/equipment');
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
