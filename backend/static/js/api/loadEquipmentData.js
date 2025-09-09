export function loadEquipmentData() {
  return fetch('/api/equipment')
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching equipmentData:', error);
    });
}
