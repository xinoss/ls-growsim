export function updateEquipmentTypeUI(el, type) {
  el.textContent = type;

  const typeClassMap = {
    '일반': 'normal-equipment',
    '레어': 'rare-equipment',
    '유니크': 'unique-equipment',
    '프리미엄': 'premium-equipment'
  };

  if (typeClassMap[type]) {
    el.classList.add(typeClassMap[type]);
  }
}
