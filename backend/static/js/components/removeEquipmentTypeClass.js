export function removeEquipmentTypeClass(element) {
  element.classList.remove(
    'normal-equipment',
    'rare-equipment',
    'premium-equipment',
    'unique-equipment'
  );
}
