import API from './api';
import { Equipment } from '../type';

export const getEquipments = () => {
  return API.get('/adminequipment');
};

export const getNextNumber = (category: string) =>
  API.get(`/adminequipment/next-number?category=${category}`);

export const uploadImage = (file: File, category: string, number: number) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('category', category);
  formData.append('number', String(number));
  return API.post('/adminequipment/upload-image', formData);
};

export const createEquipment = (data: {
  category: string;
  type: string;
  name: string;
  cooldown: number;
  number: number;
}) => API.post('/adminequipment/create', data);

export const updateEquipment = (
  category: string,
  number: number,
  updates: Partial<Equipment>
) => {
  return API.put(`/adminequipment/update/${category}/${number}`, updates);
};

export const deleteEquipment = (category: string, number: number) => {
  return API.delete(`/adminequipment/delete/${category}/${number}`);
};

export const backupEquipment = () => {
  return API.get('/adminequipment/backup', {
    responseType: 'blob',
  });
};