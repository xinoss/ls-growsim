exports.getEnglishCategory = (korean) => {
  const map = {
    무기: 'weapon',
    갑옷: 'armor',
    투구: 'helmet',
    망토: 'cloak',
  };
  return map[korean] || 'unknown';
};
