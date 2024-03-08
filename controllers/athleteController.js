// controllers/athleteController.js
const { Athlete } = require('../models');

const athleteController = {
  getAllAthletes: async (req, res) => {
    try {
      const athletes = await Athlete.findAll();
      res.render('athletes', { athletes });
    } catch (error) {
      console.error('Erreur lors de la récupération des athlètes:', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des athlètes' });
    }
  },
};

module.exports = athleteController;
