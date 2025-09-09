import { useState } from 'react';
import { calculateBaseCooldown } from '../utils/cooldownCalculator';

export const useCooldownCalculator = () => {
  const [trainLevel, setTrainLevel] = useState('');
  const [cooldown, setCooldown] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    const parsedTrainLevel = parseInt(trainLevel, 10);
    const parsedCooldown = parseFloat(cooldown);

    if (isNaN(parsedTrainLevel) || isNaN(parsedCooldown)) {
      setResult(null);
      setError('숫자를 정확히 입력해주세요.');
      return;
    }

    const res = calculateBaseCooldown(parsedCooldown, parsedTrainLevel);
    setResult(res);
    setError(null);
  };

  return {
    trainLevel,
    setTrainLevel,
    cooldown,
    setCooldown,
    result,
    error,
    handleCalculate,
  };
};
