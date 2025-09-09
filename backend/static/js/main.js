import { maxLengthCheck } from './utils/maxLengthCheck.js';
import { resetCharacter } from './core/resetCharacter.js';
import { resetEquipment } from './core/resetEquipment.js';
import { showDialog, hideDialog } from './dialogs/dialogUtils.js';
import { updateDialogContent } from './dialogs/updateDialogContent.js';
import { getStats, initialStatPoints } from './core/adjust.js';
import { loadCostData } from './api/loadCostData.js';
import { loadEquipmentData } from './api/loadEquipmentData.js';
import { handleCategoryChange } from './handlers/handleCategoryChange.js';
import { handleItemSelect } from './handlers/handleItemSelect.js';
import { handleStatAdjust } from './handlers/handleStatAdjust.js';
import { handleCooldownRequest } from './handlers/handleCooldownRequest.js';
import { onLongClick } from './utils/onLongClick.js';

let costData = [];
let equipmentData = [];

document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('resetCharacterBtn')?.addEventListener('click', () => {
    resetCharacter(initialStatPoints, getStats(), costData);
  });
  document.getElementById('resetEquipmentBtn')?.addEventListener('click', resetEquipment);

  document.getElementById('trainLevel')?.addEventListener('input', maxLengthCheck);

  document.getElementById('openDialog1Btn')?.addEventListener('click', () => {
    updateDialogContent('dialog1');
    showDialog('dialog1');
  });

  document.getElementById('closeDialog1Btn')?.addEventListener('click', () => hideDialog('dialog1'));
  document.getElementById('closeDialog2Btn')?.addEventListener('click', () => hideDialog('dialog2'));
  document.getElementById('closeDialog3Btn')?.addEventListener('click', () => hideDialog('dialog3'));

  loadCostData().then(data => {
    if (data) costData = data;
  });
  loadEquipmentData().then(data => {
    if (data) equipmentData = data;
  });

  document.getElementById('categorySelect')?.addEventListener('change', () => {
    handleCategoryChange(equipmentData);
  });
  document.getElementById('itemSelect')?.addEventListener('change', () => {
    handleItemSelect(equipmentData);
  });

  document.querySelectorAll('button[data-stat][data-delta]')?.forEach(button => {
    const stat = button.getAttribute('data-stat');
    const delta = parseInt(button.getAttribute('data-delta'), 10);
    button.addEventListener('click', () => {
      handleStatAdjust(stat, delta, costData);
    });
  });

  document.querySelectorAll('button[data-stat][data-delta]')?.forEach(button => {
  const stat = button.getAttribute('data-stat');
  const delta = parseInt(button.getAttribute('data-delta'), 10);
  button.onclick = null;
  onLongClick(button, 800, 100, () => {
    handleStatAdjust(stat, delta, costData);
  });
});

  // ✅ 계산하기 버튼 (쿨타임 계산)
  document.getElementById('calculateBtn')?.addEventListener('click', handleCooldownRequest);
});
