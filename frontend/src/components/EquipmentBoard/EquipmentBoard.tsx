import React from 'react';
import EquipmentColumn from './EquipmentColumn';
import { Equipment } from '../../type';

interface Props {
  equipments: Equipment[];
  onUpdateItem: (number: number, updatedFields: Partial<Equipment>) => void;
}

const categories = ['무기', '갑옷', '투구', '망토'];

const EquipmentBoard: React.FC<Props> = ({ equipments, onUpdateItem }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {categories.map((category) => (
        <EquipmentColumn
          key={category}
          title={category}
          equipments={
            equipments
            .filter((eq) => eq.category === category)
            .sort((a, b) => a.name.localeCompare(b.name, 'ko', { sensitivity: 'base' }))
          }
          onUpdateItem={onUpdateItem}
        />
      ))}
    </div>
  );
};

export default EquipmentBoard;
