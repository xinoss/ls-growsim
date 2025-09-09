export function handleCategoryChange(equipmentList) {
  const category = document.getElementById('categorySelect').value;
  const itemSelect = document.getElementById('itemSelect');
  itemSelect.innerHTML = '<option value="">장비 이름</option>';

  const filteredItems = equipmentList
  .filter(item => item.category === category)
  .sort((a, b) => a.name.localeCompare(b.name, 'ko', { sensitivity: 'base' }));

  filteredItems.forEach(item => {
    const option = document.createElement('option');
    option.value = item.name;
    option.textContent = item.name;
    option.dataset.number = item.number;
    option.dataset.type = item.type;
    itemSelect.appendChild(option);
  });
}
