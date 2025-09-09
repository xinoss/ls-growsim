export function updateProgressBar(stat, value) {
  const percentage = (value / 100) * 100;
  const progressBar = document.getElementById(`progress-${stat}`);
  if (progressBar) {
    progressBar.style.width = `${percentage}%`;
  }
}
