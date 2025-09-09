import React from 'react';
import { useCooldownCalculator } from '../../hooks/useCooldownCalculator';

const CalculateBaseCooldownDialog: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const {
    trainLevel,
    setTrainLevel,
    cooldown,
    setCooldown,
    error,
    result,
    handleCalculate,
  } = useCooldownCalculator();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">기본 쿨타임 계산기</h2>
        <input type="number"  placeholder="육성 수치"  value={trainLevel}  onChange={(e) => setTrainLevel(e.target.value)}  className="w-full border p-2 mb-2"/>
        <input  type="number"  placeholder="현재 쿨타임 (초)"  value={cooldown}  onChange={(e) => setCooldown(e.target.value)}  className="w-full border p-2 mb-4"/>

        {error && (<div className="mb-4 text-red-600 font-semibold">{error}</div>)}

        {result !== null && (<div className="mb-4 text-green-700 font-semibold">육성 0 기준 쿨타임: {result}초</div>)}

        <div className="flex justify-end gap-2">
          <button onClick={handleCalculate} className="bg-blue-500 text-white px-4 py-2 rounded">계산하기</button>
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">닫기</button>
        </div>
      </div>
    </div>
  );
};

export default CalculateBaseCooldownDialog;
