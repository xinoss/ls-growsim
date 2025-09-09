import React, { useState } from 'react';
import EquipmentDialog from '../Dialogs/EquipmentDialog';
import { Equipment } from '../../type';

interface Props {
  item: Equipment;
  onUpdateItem: (number: number, updatedFields: Partial<Equipment>) => void;
}

const EquipmentCard: React.FC<Props> = ({ item, onUpdateItem }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="bg-gray-100 p-3 rounded mb-2 cursor-pointer hover:bg-gray-200"
        onClick={() => setOpen(true)}
      >
        <p className="font-semibold">{item.name}</p>
        <p className="text-sm text-gray-600">{item.type} : {item.cooldown}</p>
      </div>

      {open && (
        <EquipmentDialog
          item={item}
          onClose={() => setOpen(false)}
          onUpdateItem={onUpdateItem}
        />
      )}
    </>
  );
};

export default EquipmentCard;
