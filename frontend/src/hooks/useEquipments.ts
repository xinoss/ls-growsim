// src/hooks/useEquipments.ts
import { useEffect, useState } from 'react';
import { getEquipments } from '../services/equipmentAPI';

export interface Equipment {
  name: string;
  number: number;
  type: string;
  category: string;
  cooldown: number;
}

const useEquipments = () => {
  const [equipments, setEquipments] = useState<Equipment[]>([]);
  const [filter, setFilter] = useState<'name' | 'type'>('name');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const res = await getEquipments();
        const cleaned = res.data.map((item: Equipment) => ({
          ...item,
          type: item.type.replace(/\s+/g, ''), // 모든 공백 제거
        }));
        setEquipments(cleaned);
      } catch (error) {
        console.error('장비 데이터를 불러오지 못했습니다:', error);
      }
    };
    fetchEquipments();
  }, []);

  const filteredEquipments = equipments.filter((item) => {
    const value = filter === 'name' ? item.name : item.type;
    const searchWords = search.trim().toLowerCase().split(/\s+/);
    const valueWords = value.trim().toLowerCase().split(/\s+/);

    if (searchWords.length === 1) {
      return valueWords.some((word) => word.includes(searchWords[0]));
    } else {
      return (
        searchWords.length === valueWords.length &&
        searchWords.every((word, idx) => word === valueWords[idx])
      );
    }
  });

  return {
    equipments,
    setEquipments,
    filteredEquipments,
    filter,
    setFilter,
    search,
    setSearch,
  };
};

export default useEquipments;