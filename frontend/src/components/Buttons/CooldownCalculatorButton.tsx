import React, { useState } from 'react';
import CooldownCalculatorDialog from '../Dialogs/CooldownCalculatorDialog';
import { useHasPermission } from '../../hooks/useHasPermission';

const CooldownCalculatorButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const hasPermission = useHasPermission();

  return (
    <>
      <button
        className="bg-indigo-500 text-white px-4 py-2 rounded ml-2 whitespace-nowrap disabled:opacity-50"
        onClick={() => setOpen(true)}
        disabled={!hasPermission}
      >
        쿨타임 계산
      </button>
      {open && <CooldownCalculatorDialog onClose={() => setOpen(false)} />}
    </>
  );
};

export default CooldownCalculatorButton;