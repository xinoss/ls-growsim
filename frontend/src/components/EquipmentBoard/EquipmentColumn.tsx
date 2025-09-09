import React from 'react';
import EquipmentCard from './EquipmentCard';
import { Equipment } from '../../type';

interface Props {
  title: string;
  equipments: Equipment[];
  onUpdateItem: (number: number, updatedFields: Partial<Equipment>) => void;
}

const EquipmentColumn: React.FC<Props> = ({ title, equipments, onUpdateItem }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-bold mb-2">{title}</h2>

      <div className="h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-200">
        {equipments.length === 0 ? (
          <p className="text-sm text-gray-500">표시할 항목이 없습니다.</p>
        ) : (
          equipments.map((item, index) => (
            <EquipmentCard
              key={`${item.category}-${item.number}-${index}`}
              item={item}
              onUpdateItem={onUpdateItem}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default EquipmentColumn;
