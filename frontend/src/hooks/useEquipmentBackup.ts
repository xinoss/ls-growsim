import { useCallback } from 'react';
import { backupEquipment } from '../services/equipmentAPI';

export function useEquipmentBackup() {
  const download = useCallback(async () => {
    const res = await backupEquipment();
    if (!res || !res.data) throw new Error('다운로드 실패');

    const blob = new Blob([res.data], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'equipmentBackup.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  }, []);

  return { download };
}