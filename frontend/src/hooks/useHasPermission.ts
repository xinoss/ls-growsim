import { useEffect, useState } from 'react';
import { getUserRequest } from '../services/authAPI';

export function useHasPermission(): boolean {
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    getUserRequest()
      .then(res => {
        setHasPermission(res.data?.permission === true);
      })
      .catch(() => setHasPermission(false));
  }, []);

  return hasPermission;
}