export function loadCostData() {
  return fetch('/api/cost')
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching costData:', error);
    });
}
