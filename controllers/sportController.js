const { Sport, Event } = require('../models');

const sportController = {
  getAllSports: async (req, res) => {
    try {
      const sports = await Sport.findAll();
      res.render('sports', { sports });
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la récupération des sports' });
    }
  },

  getSportById: async (req, res) => {
    const { id } = req.params;
    try {
      const sport = await Sport.findByPk(id);
      if (sport) {
        res.json(sport);
      } else {
        res.status(404).json({ error: 'Sport non trouvé' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la récupération du sport' });
    }
  },

  createSport: async (req, res) => {
    const { name } = req.body;
    try {
      const newSport = await Sport.create({ name });
      res.status(201).json(newSport);
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la création du sport' });
    }
  },

  updateSport: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const sport = await Sport.findByPk(id);
      if (sport) {
        await sport.update({ name });
        res.json(sport);
      } else {
        res.status(404).json({ error: 'Sport non trouvé' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la mise à jour du sport' });
    }
  },

  deleteSport: async (req, res) => {
    const { id } = req.params;
    try {
      const sport = await Sport.findByPk(id);
      if (sport) {
        await sport.destroy();
        res.json({ message: 'Sport supprimé avec succès' });
      } else {
        res.status(404).json({ error: 'Sport non trouvé' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la suppression du sport' });
    }
  },
};

module.exports = sportController;
