const express = require('express');
const router = express.Router();
const path = require('path');
const viewController = require('../controllers/adminViewController');

router.use('/login', express.static(path.join(__dirname, '..', 'static', 'dist')));
router.get('/login', viewController.serveLoginPage);

router.use('/admin', express.static(path.join(__dirname, '..', 'static', 'dist')));
router.get('/admin/{*any}', viewController.serveAdminPage);

module.exports = router;
