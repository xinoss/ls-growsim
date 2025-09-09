const mongoose = require('mongoose');

const EquipmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  number: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  cooldown: {
    type: Number,
    required: true
  }
}, {
  timestamp:true
});

module.exports = mongoose.model('equipments', EquipmentSchema);
