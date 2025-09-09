import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/authUtils';

export const useIdleLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let lastActivity = Date.now();
    const IDLE_LIMIT = 15 * 60 * 1000;

    const resetActivity = () => {
      lastActivity = Date.now();
    };

    const checkIdle = () => {
      if (Date.now() - lastActivity > IDLE_LIMIT) {
        logout(true);
      }
    };

    const events = ['mousemove', 'keydown', 'scroll', 'click'];
    events.forEach((event) => window.addEventListener(event, resetActivity));
    const interval = setInterval(checkIdle, 60000);

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetActivity));
      clearInterval(interval);
    };
  }, [navigate]);
};