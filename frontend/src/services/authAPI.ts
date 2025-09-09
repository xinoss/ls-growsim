import API from './api';

export const loginRequest = (username: string, password: string) => {
  return API.post('/auth/login', { username, password });
};

export const registerRequest = (username: string) => {
  return API.post('/auth/register', { username });
};

export const refreshRequest = () => {
  return API.post('/auth/refresh');
};

export const logoutRequest = () => {
  return API.post('/auth/logout');
};

export const getUserRequest = () => {
  return API.get('/auth/profile');
};

export const verifyToken = () => {
  return API.get('/auth/verify');
};