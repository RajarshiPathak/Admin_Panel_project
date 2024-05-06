const express = require('express');
const { addInstance, listInstances } = require('../controllers/instanceController');
const { authMiddleware } = require('../middlewares/authMiddleware');
 // Implement JWT check

const router = express.Router();

// Ensure only admin can add and list instances
router.post('/add', authMiddleware(['admin']), addInstance);
router.get('/list', authMiddleware(['admin']), listInstances);

module.exports = router;
