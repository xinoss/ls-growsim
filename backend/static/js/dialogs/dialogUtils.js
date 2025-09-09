export function showDialog(dialogId) {
  const dialog = document.getElementById(dialogId);
  dialog?.showModal();
}

export function hideDialog(dialogId) {
  const dialog = document.getElementById(dialogId);
  dialog?.close();
}
