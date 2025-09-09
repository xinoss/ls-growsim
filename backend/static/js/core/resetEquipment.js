export function resetEquipment() {
  resetText();
  resetEquipmentClass();
  resetVisuals();
}

function resetText() {
  document.getElementById('equipmentSelect').textContent = '장비를 선택하세요.';
  const typeEl = document.getElementById('equipmentType');
  typeEl.textContent = '없음';
}

function resetEquipmentClass() {
  const typeEl = document.getElementById('equipmentType');
  typeEl.classList.remove('normal-equipment', 'rare-equipment', 'premium-equipment', 'unique-equipment');
}

function resetVisuals() {
  document.getElementById('equipmentImage').src = '/static/img/equipment/unknown.png';
  document.getElementById('categorySelect').value = '';
  document.getElementById('itemSelect').value = '';
  document.getElementById('trainLevel').value = '';
}
