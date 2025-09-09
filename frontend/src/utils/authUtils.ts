import { logoutRequest } from "../services/authAPI";

export const logout = async (redirect: boolean = true) => {
  try {
    await logoutRequest();
  } catch (e) {
    // 네트워크 오류 등 무시
  }
  sessionStorage.removeItem('accessToken');
  if (redirect) {
    window.location.href = '/login';
  }
};