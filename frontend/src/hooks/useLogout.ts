import { logout as logoutUtil } from '../utils/authUtils';

export const useLogout = () => {
  return {
    logout: logoutUtil,
  };
};
