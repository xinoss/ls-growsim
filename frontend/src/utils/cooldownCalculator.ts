export function calculateBaseCooldown(cooldown: number, trainLevel: number): number {
  const gameTimeFactor = 1.008;
  let multiplier = 1;

  if (trainLevel <= 100) {
    multiplier *= 1 - 0.25 * (trainLevel / 100);
  } else if (trainLevel <= 200) {
    multiplier *= 0.75;
    multiplier *= 1 - 0.125 * ((trainLevel - 100) / 100);
  } else {
    multiplier *= 0.75;
    multiplier *= 0.875;
    multiplier *= 1 - 0.0625 * ((trainLevel - 200) / 100);
  }

  const baseCooldown = cooldown / (multiplier * gameTimeFactor);
  return parseFloat(baseCooldown.toFixed(3));
}
