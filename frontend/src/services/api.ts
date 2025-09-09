import axios from 'axios';
import { logout } from '../utils/authUtils';

const API = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

API.interceptors.request.use((config) => {
  const accessToken = sessionStorage.getItem('accessToken');
  if (accessToken) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  if (!(config.data instanceof FormData)) {
    config.headers = config.headers || {};
    config.headers['Content-Type'] = 'application/json';
  }

  return config;
});

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes('/auth/refresh')
    ) {
      originalRequest._retry = true;
      try {
        const refreshRes = await API.post('/auth/refresh');
        const newAccessToken = refreshRes.data.accessToken;

        sessionStorage.setItem('accessToken', newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return API(originalRequest);
      } catch (refreshErr) {
        console.error('토큰 재발급 실패:', refreshErr);
        logout();
        return Promise.reject(refreshErr);
      }
    }

    return Promise.reject(error);
  }
);

export default API;
