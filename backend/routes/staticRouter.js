const express = require('express');
const router = express.Router();
const staticController = require('../controllers/staticController');

router.get('/', staticController.index);
router.get('/grow', staticController.grow);
router.get('/guide', staticController.guide);
router.get('/community', staticController.community);
router.get('/support', staticController.support);
router.get('/terms', staticController.terms);

module.exports = router;
