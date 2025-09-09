const Equipment = require('../models/Equipment');
const calculateCooldown = require('../utils/calculateCooldown');

exports.postCooldown = async (req, res) => {
  const { category, itemName, trainLevel } = req.body;

  if (!category || !itemName || trainLevel === undefined) {
    return res.status(400).json({ error: 'Enter Category, Equipment, TrainLevel' });
  }

  try {
    const item = await Equipment.findOne({ category, name: itemName });
    if (!item) return res.status(404).json({ error: 'Not found Equipment' });

    const cooldown = calculateCooldown(item.cooldown, trainLevel);
    res.json({ itemName: item.name, trainLevel, gameCooldown: cooldown });
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};
