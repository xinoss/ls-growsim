export async function requestCooldown({ category, itemName, trainLevel }) {
  const res = await fetch('/api/cooldown', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ category, itemName, trainLevel })
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || 'Server Error');
  }

  return data;
}
