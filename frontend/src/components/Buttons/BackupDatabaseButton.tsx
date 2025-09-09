import React from 'react';
import { useIsAdmin } from '../../hooks/useIsAdmin';
import { useEquipmentBackup } from '../../hooks/useEquipmentBackup';

const BackupDatabaseButton: React.FC = () => {
  const isAdmin = useIsAdmin();
  const { download } = useEquipmentBackup();

  if (!isAdmin) return null;

  return (
    <button
      className="bg-yellow-600 text-white px-4 py-2 rounded ml-2 whitespace-nowrap"
      onClick={download}
    >
      다운로드
    </button>
  );
};

export default BackupDatabaseButton;