// seed.js

const { Sport } = require('./models');

const seedSports = async () => {
  try {
    await Sport.bulkCreate([
      { name: 'Athlétisme' },
      { name: 'Natation' },
      { name: 'Basketball' },
      // Ajoutez d'autres sports selon vos besoins
    ]);

    console.log('Sports ajoutés avec succès à la base de données.');
  } catch (error) {
    console.error('Erreur lors de l\'ajout des sports à la base de données:', error);
  } finally {
    process.exit(); // Termine le script
  }
};

seedSports();
