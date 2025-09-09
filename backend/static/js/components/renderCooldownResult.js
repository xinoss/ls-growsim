import { updateDialogContent } from '../dialogs/updateDialogContent.js';
import { showDialog } from '../dialogs/dialogUtils.js';

export function renderCooldownResult({ itemName, trainLevel, gameCooldown }) {
  updateDialogContent('dialog2', { itemName, trainLevel, gameCooldown });
  showDialog('dialog2');
}
