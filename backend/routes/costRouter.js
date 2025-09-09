const express = require('express');
const router = express.Router();
const { costData } = require('../data/costData');

router.get('/', (req, res) => {
  res.json(costData);
});

module.exports = router;
