import React from 'react';
import useEquipments from '../hooks/useEquipments';
import EquipmentBoard from './EquipmentBoard/EquipmentBoard';
import SearchBar from './SearchBar/SearchBar';
import AddEquipmentButton from './Buttons/AddEquipmentButton';
import type { Equipment } from '../type';
import CooldownCalculatorButton from './Buttons/CooldownCalculatorButton';
import LogoutButton from './Buttons/LogoutButton';
import RegisterRedirectButton from './Buttons/RegisterRedirectButton';
import BackupDatabaseButton from './Buttons/BackupDatabaseButton';

const Equipment: React.FC = () => {
  const {
    equipments,
    setEquipments,
    filter,
    setFilter,
    search,
    setSearch,
    filteredEquipments,
  } = useEquipments();

  const handleUpdateItem = (number: number, updatedFields: Partial<Equipment>) => {
    setEquipments((prev) =>
      prev.map((item) =>
        item.number === number ? { ...item, ...updatedFields } : item
      )
    );
  };

  // 장비 추가 함수
  const handleAddItem = (item: Equipment) => {
    setEquipments((prev) => [...prev, item]);
  };

  return (
    <div className="p-6">
      {/* 🔍 검색창 + ➕ 추가 버튼 */}
      <div className="flex justify-center items-center mb-6">
        <div className="flex gap-4 items-center">
          <SearchBar
            filter={filter}
            setFilter={setFilter}
            search={search}
            setSearch={setSearch}
          />
          <AddEquipmentButton onAdd={handleAddItem} />
          <CooldownCalculatorButton />
          <BackupDatabaseButton />
        </div>
      </div>

      <EquipmentBoard
        equipments={filteredEquipments}
        onUpdateItem={handleUpdateItem}
      />
    </div>
  );
};

export default Equipment;