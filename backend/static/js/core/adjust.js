const initialPoints = 200;
let points = initialPoints;
const stats = {  weapon: 0,  armor: 0,  helmet: 0,  cloak: 0,  attack: 0,  defense: 0,  speed: 0,  drop: 0 };

export function adjustStat(stat, delta) {
  const isStat = ['attack', 'defense', 'speed', 'drop'].includes(stat);
  const pointCost = isStat ? 2 : 1;

  if (delta > 0) {
    if (points >= pointCost && stats[stat] < 100) {
      stats[stat] += delta;
      points -= pointCost;
    }
  } else if (delta < 0) {
    if (stats[stat] > 0) {
      stats[stat] += delta;
      points += pointCost;
    }
  }

  return {
    updatedStatValue: stats[stat],
    remainingPoints: points,
    usedPoints: initialPoints - points,
    currentStats: { ...stats }
  };
}

export function getStats() {
  return { ...stats };
}

export function resetStatState() {
  for (let key in stats) {
    stats[key] = 0;
  }
  points = initialPoints;
}

export const initialStatPoints = initialPoints;
