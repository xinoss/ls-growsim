import { useEffect, useState } from 'react';
import { verifyToken } from '../services/authAPI';

export const useAuth = (): boolean | null => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    verifyToken()
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false));
  }, []);

  return isAuthenticated;
};
