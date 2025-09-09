const Equipment = require('../models/Equipment');

exports.getAllEquipment = async (req, res) => {
  const items = await Equipment.find({}, { cooldown: 0 });
  res.json(items);
};

exports.getByCategory = async (req, res) => {
  const { category } = req.query;
  if (!category) return res.status(400).json({ error: 'Select Category' });

  const items = await Equipment.find(
    { category },
    { name: 1, number: 1, type: 1, category: 1, _id: 0 }
  );

  res.json(items);
};
