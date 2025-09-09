import React, { useRef } from 'react';
import { useEquipmentEdit } from '../../hooks/useEquipmentEdit';
import { Equipment } from '../../type';
import CategorySelect from '../SelectBoxes/CategorySelect';
import TypeSelect from '../SelectBoxes/TypeSelect';
import DeleteEquipmentButton from '../Buttons/DeleteEquipmentButton';
import { useHasPermission } from '../../hooks/useHasPermission';

interface Props {
  item: Equipment;
  onClose: () => void;
  onUpdateItem: (number: number, updatedFields: Partial<Equipment>) => void;
}

const EquipmentDialog: React.FC<Props> = ({ item, onClose, onUpdateItem }) => {
  const {
    isEditing,
    edited,
    setIsEditing,
    handleChange,
    handleFileChange,
    handleSaveWithImage,
  } = useEquipmentEdit(item, onUpdateItem, onClose);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const hasPermission = useHasPermission();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded w-full max-w-md shadow-md">
        <h2 className="text-xl font-bold mb-4">
          {isEditing ? '장비 수정' : '장비 정보'}
        </h2>

        {isEditing ? (
          <>
            <CategorySelect value={edited.category} onChange={(e) => handleChange('category', e.target.value)} />
            <TypeSelect value={edited.type} onChange={(e) => handleChange('type', e.target.value)} />
            <input type="text" value={edited.name} onChange={(e) => handleChange('name', e.target.value)} className="w-full border p-2 mb-2" />
            <input type="number" value={edited.cooldown} onChange={(e) => handleChange('cooldown', parseFloat(e.target.value))} className="w-full border p-2 mb-4" />
            <input type="file" accept="image/png" ref={fileInputRef} onChange={handleFileChange} className="w-full border p-2 mb-4" />

            <div className="flex items-center mt-2">
              <button
                onClick={handleSaveWithImage}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                저장
              </button>
              <button onClick={() => setIsEditing(false)} className="bg-red-500 text-white px-4 py-2 rounded mr-2">취소</button>
              <div className="flex-1"></div>
              <DeleteEquipmentButton category={item.category} number={item.number} onDeleted={onClose} />
            </div>
          </>
        ) : (
          <>
            <p><strong>부위:</strong> {item.category}</p>
            <p><strong>타입:</strong> {item.type}</p>
            <p><strong>이름:</strong> {item.name}</p>
            <p><strong>쿨다운:</strong> {item.cooldown}</p>

            <div className="mt-4 flex justify-between">
              <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-4 py-2 rounded mr-2 disabled:opacity-50" disabled={!hasPermission}>수정</button>
              <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded mr-2">닫기</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EquipmentDialog;