const express = require('express');
const router = express.Router();
const sportController = require('../controllers/sportController');

router.get('/', sportController.getAllSports);
router.get('/sports', sportController.getAllSports);
router.get('/sports/:id', sportController.getSportById);
router.post('/sports', sportController.createSport);
router.put('/sports/:id', sportController.updateSport);
router.delete('/sports/:id', sportController.deleteSport);

module.exports = router;
