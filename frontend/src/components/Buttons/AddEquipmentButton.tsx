import React, { useState } from 'react';
import AddEquipmentDialog from '../Dialogs/AddEquipmentDialog';
import { Equipment } from '../../type';
import { useHasPermission } from '../../hooks/useHasPermission';

const AddEquipmentButton: React.FC<{ onAdd: (item: Equipment) => void }> = ({ onAdd }) => {
  const [open, setOpen] = useState(false);
  const hasPermission = useHasPermission();

  return (
    <>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded ml-2 whitespace-nowrap disabled:opacity-50"
        onClick={() => setOpen(true)}
        disabled={!hasPermission}
      >
        장비 추가
      </button>
      {open && <AddEquipmentDialog onAdd={onAdd} onClose={() => setOpen(false)} />}
    </>
  );
};

export default AddEquipmentButton;