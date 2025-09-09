const Equipment = require('../models/Equipment');
const { getEnglishCategory } = require('../utils/categoryMapper');
const { saveImageBuffer } = require('../utils/uploadImage');
const path = require('path');
const fs = require("fs");

exports.getAllEquipments = async (req, res) => {
  try {
    const equipments = await Equipment.find();
    res.json(equipments);
  } catch (err) {
    res.status(500).json({ message: 'Data retrieval failure', error: err });
  }
};

exports.updateEquipment = async (req, res) => {
  const { category, number } = req.params;
  const updates = req.body;

  if (!req.user.permission) return res.status(403).json({ message: 'Have not Permission' });

  try {
    const updated = await Equipment.findOneAndUpdate(
      { category, number: Number(number) },
      updates,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Not found Equipment' });
    }

    res.json({ message: 'Corrected', updated });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
};

exports.getNextNumber = async (req, res) => {
  const { category } = req.query;

  if (!req.user.permission) return res.status(403).json({ message: 'Have not Permission' });

  if (!category) return res.status(400).json({ message: 'Need Category' });

  const latest = await Equipment.find({ category }).sort({ number: -1 }).limit(1);
  const nextNumber = latest.length > 0 ? latest[0].number + 1 : 1;
  res.json({ nextNumber });
};

exports.uploadImageHandler = async (req, res) => {

  if (!req.user.permission) return res.status(403).json({ message: 'Have not Permission' });

  try {
    const { category, number } = req.body;
    const folder = getEnglishCategory(category);
    await saveImageBuffer(req.file.buffer, folder, number);
    res.json({ message: `Image Upload Success & Image saved: ${folder}/${number}.png` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Image Upload failed' });
  }
};

exports.createEquipment = async (req, res) => {

  if (!req.user.permission) return res.status(403).json({ message: 'Have not Permission' });

  try {
    const newItem = new Equipment(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: 'Sava failed', error: err });
  }
};

exports.deleteEquipment = async (req, res) => {
  const { category, number } = req.params;

  if (!req.user.permission) return res.status(403).json({ message: 'Have not Permission' });

  try {
    const folder = getEnglishCategory(category);
    const deleted = await Equipment.findOneAndDelete({ category, number: number });
    if (!deleted) {
      return res.status(404).json({ message: 'Not found Equipment' });
    }

    const imagePath = path.join(__dirname, '..', 'static', 'img', 'equipment', folder, `${number}.png`);

    fs.unlink(imagePath, (err) => {
      if (err && err.code !== 'ENOENT') {
        console.error('Image Delete failed:', err);
      }
    });

    res.status(200).json({ message: 'Deleted' });
  } catch (error) {
    console.error('Deleteing Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.backupEquipment = async (req, res) => {

  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Have not Permission' });

  try {
    const equipments = await Equipment.find();
    res.setHeader('Content-Disposition', 'attachment; filename=equipmentBackup.json');
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(equipments, null, 2));
  } catch (err) {
    res.status(500).json({ message: 'Backup failed', error: err });
  }
};
