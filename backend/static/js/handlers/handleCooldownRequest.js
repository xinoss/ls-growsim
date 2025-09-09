import { getCooldownFormData } from '../core/getCooldownFormData.js';
import { requestCooldown } from '../api/requestCooldown.js';
import { renderCooldownResult } from '../components/renderCooldownResult.js';
import { renderCooldownError } from '../components/renderCooldownError.js';

export async function handleCooldownRequest() {
  const input = getCooldownFormData();

  if (!input) {
    renderCooldownError('카테고리, 장비, 육성 수치를 모두 입력해주세요.');
    return;
  }

  try {
    const data = await requestCooldown(input);
    renderCooldownResult(data);
  } catch (err) {
    renderCooldownError(err.message || '요청 실패: 네트워크 오류');
  }
}
