import { useState, useEffect } from 'react';
import { createEquipment, getNextNumber, uploadImage } from '../services/equipmentAPI';
import { Equipment } from '../type';

export function useEquipmentAdd(onAdd: (item: Equipment) => void, onClose: () => void) {
  const [form, setForm] = useState({
    name: '',
    type: '',
    category: '',
    cooldown: '',
    image: null as File | null,
  });
  const [number, setNumber] = useState<number | null>(null);

  useEffect(() => {
    const fetchNumber = async () => {
      if (form.category) {
        const res = await getNextNumber(form.category);
        setNumber(res.data.nextNumber);
      }
    };
    fetchNumber();
  }, [form.category]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, image: e.target.files?.[0] || null });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.type || !form.category || !form.cooldown || !form.image || !number) return;
    await uploadImage(form.image, form.category, number);
    const res = await createEquipment({
      category: form.category,
      type: form.type,
      name: form.name,
      cooldown: parseFloat(form.cooldown),
      number,
    });
    onAdd(res.data);
    onClose();
  };

  return {
    form,
    number,
    handleChange,
    handleFileChange,
    handleSubmit,
  };
}