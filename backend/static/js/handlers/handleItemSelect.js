import { removeEquipmentTypeClass } from '../components/removeEquipmentTypeClass.js';
import { updateEquipmentTypeUI } from './updateEquipmentTypeUI.js';
import { convertEquipmentCategoryText } from './convertEquipmentCategoryText.js';

export function handleItemSelect() {
  const categorySelected = document.getElementById('categorySelect').selectedOptions[0].value;
  const itemSelected = document.getElementById('itemSelect').selectedOptions[0];
  if (!itemSelected) return;

  const category = convertEquipmentCategoryText(categorySelected);
  const itemName = itemSelected.value;
  const number = itemSelected.dataset.number;
  const type = itemSelected.dataset.type;

  document.getElementById('equipmentSelect').textContent = itemName;
  document.getElementById('equipmentImage').src = `/static/img/equipment/${category}/${number}.png`;

  const equipmentTypeEl = document.getElementById('equipmentType');
  removeEquipmentTypeClass(equipmentTypeEl);
  updateEquipmentTypeUI(equipmentTypeEl, type);
}
