// routes/athleteRoutes.js
const express = require('express');
const router = express.Router();
const athleteController = require('../controllers/athleteController');

router.get('/', athleteController.getAllAthletes);

module.exports = router;
