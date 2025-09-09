export function convertEquipmentCategoryText(category) {
  if (category === '무기') {
    return 'weapon';  
  } else if (category === '갑옷') {
    return 'armor';
  } else if (category === '투구') {
    return 'helmet';
  } else if (category === '망토') {
    return 'cloak';
  }
}
