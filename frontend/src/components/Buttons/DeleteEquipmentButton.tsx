import React from 'react';
import { useEquipmentDelete } from '../../hooks/useEquipmentDelete';
import { useHasPermission } from '../../hooks/useHasPermission';

interface Props {
  category: string;
  number: number;
  onDeleted: () => void;
}

const DeleteEquipmentButton: React.FC<Props> = ({ category, number, onDeleted }) => {
  const { handleDelete } = useEquipmentDelete();
  const hasPermission = useHasPermission();

  return (
    <button
      className="bg-red-500 text-white px-4 py-2 rounded disabled:opacity-50"
      onClick={() => handleDelete(category, number, onDeleted)}
      disabled={!hasPermission}
    >
      삭제
    </button>
  );
};

export default DeleteEquipmentButton;