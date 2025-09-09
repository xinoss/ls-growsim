import { adjustStat } from '../core/adjust.js';
import { updateProgressBar } from '../components/updateProgressBar.js';
import { calculateTotalCost } from '../core/calculateTotalCost.js';
import { updateTotalCost } from '../components/updateTotalCost.js';

export function handleStatAdjust(stat, delta, costData) {
  const { updatedStatValue, remainingPoints, usedPoints, currentStats } = adjustStat(stat, delta);

  document.getElementById(stat).textContent = updatedStatValue;
  document.getElementById('points').textContent = remainingPoints;
  document.getElementById('usedPoints').textContent = usedPoints;
  updateProgressBar(stat, updatedStatValue);

  const total = calculateTotalCost(currentStats, costData);
  updateTotalCost(total);
}
