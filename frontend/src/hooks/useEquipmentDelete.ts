import { deleteEquipment } from '../services/equipmentAPI';

export const useEquipmentDelete = () => {
  const confirmDeletion = (): boolean => {
    return window.confirm('정말 삭제하시겠습니까?');
  };

  const performDeletion = async (category: string, number: number) => {
    await deleteEquipment(category, number);
  };

  const handleDelete = async (
    category: string,
    number: number,
    onDeleted: () => void
  ) => {
    if (!confirmDeletion()) return;

    try {
      await performDeletion(category, number);
      onDeleted();
    } catch (err) {
      console.error('삭제 실패:', err);
    }
  };

  return {
    handleDelete,
  };
};
