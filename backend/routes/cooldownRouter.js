const express = require('express');
const router = express.Router();
const { postCooldown } = require('../controllers/cooldownController');

router.post('/', postCooldown);

module.exports = router;
