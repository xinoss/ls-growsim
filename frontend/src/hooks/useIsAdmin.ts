import { useEffect, useState } from 'react';
import { getUserRequest } from '../services/authAPI';

export function useIsAdmin(): boolean {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    getUserRequest()
      .then(res => {
        setIsAdmin(res.data?.role === 'admin');
      })
      .catch(() => setIsAdmin(false));
  }, []);

  return isAdmin;
}