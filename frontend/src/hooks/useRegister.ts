import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerRequest } from '../services/authAPI';

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const register = async (username: string, password: string) => {
    setLoading(true);
    setError('');
    setMessage('');
    try {
      const res = await registerRequest(username, password);
      setMessage(res.data.message);
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, message, error };
};
