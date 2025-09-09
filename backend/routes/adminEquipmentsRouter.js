const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const {
  getAllEquipments,
  updateEquipment,
  createEquipment,
  getNextNumber,
  uploadImageHandler,
  deleteEquipment,
  backupEquipment,
} = require('../controllers/adminEquipmentController');
const authenticateToken = require('../middlewares/authenticateToken');

router.get('/', authenticateToken, getAllEquipments);

router.get('/next-number', authenticateToken, getNextNumber);
router.post('/create', authenticateToken, createEquipment);
router.put('/update/:category/:number', authenticateToken, updateEquipment);
router.post('/upload-image', authenticateToken, upload.single('file'), uploadImageHandler);
router.delete('/delete/:category/:number', authenticateToken, deleteEquipment);
router.get('/backup', authenticateToken, backupEquipment);


module.exports = router;
