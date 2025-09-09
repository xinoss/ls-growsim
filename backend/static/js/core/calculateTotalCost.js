export function calculateTotalCost(stats, costData) {
  let total = 0;

  for (let stat in stats) {
    const levelRaw = stats[stat];
    const level = typeof levelRaw === 'number' ? levelRaw : parseInt(levelRaw?.level ?? 0);

    const isStat = ['attack', 'defense', 'speed', 'drop'].includes(stat);

    for (let i = 0; i < level; i++) {
      const cost = i < costData.length ? costData[i] : costData[costData.length - 1];
      total += isStat ? cost * 2 : cost;
    }
  }

  return total;
}
