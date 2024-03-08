// App.js
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const sportsRoutes = require('./routes/sports');
const eventsRoutes = require('./routes/events');
const athleteRoutes = require('./routes/athleteRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/sports', sportsRoutes);
app.use('/events', eventsRoutes);
app.use('/athletes', athleteRoutes); 

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

sequelize.sync().then(() => {
  if (require.main === module) {
    app.listen(PORT, () => {
      console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
    });
  }
}).catch(err => console.error('Erreur de synchronisation de la base de données:', err));

module.exports = app;
