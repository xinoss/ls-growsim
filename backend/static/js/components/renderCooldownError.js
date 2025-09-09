import { updateDialogContent } from '../dialogs/updateDialogContent.js';
import { showDialog } from '../dialogs/dialogUtils.js';

export function renderCooldownError(error) {
  updateDialogContent('dialog3', { error });
  showDialog('dialog3');
}
