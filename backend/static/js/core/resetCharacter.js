import { updateTotalCost } from '../components/updateTotalCost.js';
import { updateProgressBar } from '../components/updateProgressBar.js';
import { resetStatState } from './adjust.js';

export function resetCharacter(initialPoints, stats, costData) {

  resetStatState();


  for (let key in stats) {
    document.getElementById(key).textContent = 0;
    updateProgressBar(key, 0);
  }

  document.getElementById('points').textContent = initialPoints;
  document.getElementById('usedPoints').textContent = 0;
  updateTotalCost(0); 
}
