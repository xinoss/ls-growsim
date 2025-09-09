const fs = require('fs');
const path = require('path');

exports.saveImageBuffer = (buffer, category, number) => {
  const dir = path.join(__dirname, '..', 'static', 'img', 'equipment', category);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const filePath = path.join(dir, `${number}.png`);
  fs.writeFileSync(filePath, buffer);
};
