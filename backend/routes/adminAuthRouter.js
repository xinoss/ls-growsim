const express = require('express');
const router = express.Router();
const authController = require('../controllers/adminAuthController');
const authenticateToken = require('../middlewares/authenticateToken');

router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/register', authenticateToken, authController.register);
router.post("/refresh", authController.refreshAccessToken);
router.get('/profile', authenticateToken, authController.getProfile);
router.get('/verify', authenticateToken, authController.verifyToken);

module.exports = router;
