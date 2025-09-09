import React from 'react';
import CategorySelect from '../SelectBoxes/CategorySelect';
import TypeSelect from '../SelectBoxes/TypeSelect';
import { useEquipmentAdd } from '../../hooks/useEquipmentAdd';
import { Equipment } from '../../type';

const AddEquipmentDialog: React.FC<{ onClose: () => void; onAdd: (item: Equipment) => void }> = ({ onClose, onAdd }) => {
  const {
    form,
    number,
    handleChange,
    handleFileChange,
    handleSubmit,
  } = useEquipmentAdd(onAdd, onClose);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">장비 추가</h2>
        <CategorySelect value={form.category} onChange={handleChange} />
        <TypeSelect value={form.type} onChange={handleChange} />
        <input name="name" placeholder="이름" className="w-full border p-2 mb-2" onChange={handleChange} />
        <input name="cooldown" type="number" placeholder="쿨다운" className="w-full border p-2 mb-2" onChange={handleChange} />
        <input type="file" accept="image/png" onChange={handleFileChange} className="w-full border p-2 mb-4" />
        <div className="flex justify-end gap-2">
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">저장</button>
          <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded mr-2">취소</button>
        </div>
      </div>
    </div>
  );
};

export default AddEquipmentDialog;