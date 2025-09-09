export function updateDialogContent(dialogId, data = {}) {
  const dialogContent = document.getElementById(dialogId + 'Content');
  if (!dialogContent) return;

  if (dialogId === 'dialog1') {
    const points = document.getElementById('points').textContent;
    const usedPoints = document.getElementById('usedPoints').textContent;
    const totalCost = document.getElementById('totalCost').textContent;

    dialogContent.innerHTML = `
      남은 육성 포인트: <strong class="red-text">${points}</strong><br>
      누적 소비 포인트: <strong class="red-text">${usedPoints}</strong><br>
      누적 육성 비용: <strong class="red-text">${totalCost}</strong> 페소
    `;
  } else if (dialogId === 'dialog2') {
    const { itemName, trainLevel, gameCooldown } = data;
    const cooldown = Number(gameCooldown);

    if (!isNaN(cooldown)) {
      dialogContent.innerHTML = `
        장비 이름: <strong>${itemName}</strong><br>
        육성 수치: <strong>${trainLevel}</strong><br>
        게임 내 쿨타임: <strong>${cooldown.toFixed(2)}초</strong>
      `;
    } else {
      dialogContent.innerHTML = `<br><strong class="red-text">쿨타임 정보가 잘못 전달되었습니다.</strong><br>`;
    }
  } else if (dialogId === 'dialog3') {
    dialogContent.innerHTML = `<br><strong class="red-text">${data.error}</strong><br>`;
  }
}
