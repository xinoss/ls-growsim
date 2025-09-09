import { useState } from 'react';
import { updateEquipment, uploadImage } from '../services/equipmentAPI'; // uploadImage 추가
import { Equipment } from '../type';

export function useEquipmentEdit(
  item: Equipment,
  onUpdateItem: (number: number, updatedFields: Partial<Equipment>) => void,
  onClose: () => void
) {
  const [isEditing, setIsEditing] = useState(false);
  const [edited, setEdited] = useState({
    name: item.name,
    type: item.type,
    category: item.category,
    cooldown: item.cooldown,
  });

  // 이미지 파일 상태 추가
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleChange = (field: keyof typeof edited, value: string | number) => {
    setEdited({ ...edited, [field]: value });
  };

  const handleSave = async () => {
    try {
      await updateEquipment(item.category, item.number, edited);
      onUpdateItem(item.number, edited);
      setIsEditing(false);
      onClose();
    } catch (err) {
      console.error('수정 실패:', err);
    }
  };

  // 파일 선택 핸들러
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImageFile(file);
  };

  // 이미지 업로드 함수
  const uploadSelectedImage = async () => {
    if (imageFile) {
      await uploadImage(imageFile, edited.category, item.number);
    }
  };

  // 저장 시 이미지도 업로드
  const handleSaveWithImage = async () => {
    await uploadSelectedImage();
    await handleSave();
  };

  return {
    isEditing,
    setIsEditing,
    edited,
    handleChange,
    handleSave,
    handleFileChange,
    handleSaveWithImage,
  };
}