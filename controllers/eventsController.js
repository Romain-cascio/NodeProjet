// eventsController.js

const { Event } = require('../models');

const eventsController = {
  getEventsBySportId: async (req, res) => {
    const { sportId } = req.params;

    try {
      console.log('Sport ID reçu:', sportId);  // Ajoutons ce log pour vérifier la valeur

      const events = await Event.findAll({
        where: {
          SportId: sportId,
        },
      });

      console.log('Événements récupérés:', events);  // Ajoutons ce log pour vérifier les événements

      res.render('events', { events });
    } catch (error) {
      console.error('Erreur lors de la récupération des événements par sport ID:', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des événements' });
    }
  },

  getEvents: async (req, res) => {
    try {
      const events = await Event.findAll();
      res.render('events', { events });
    } catch (error) {
      console.error('Erreur lors de la récupération de tous les événements:', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des événements' });
    }
  },

};

module.exports = eventsController;
