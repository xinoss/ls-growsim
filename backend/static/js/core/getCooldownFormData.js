export function getCooldownFormData() {
  const category = document.getElementById('categorySelect').value;
  const itemName = document.getElementById('itemSelect').value;
  const trainLevel = parseFloat(document.getElementById('trainLevel').value);

  if (!category || !itemName || isNaN(trainLevel)) return null;

  return { category, itemName, trainLevel };
}
