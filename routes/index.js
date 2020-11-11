const path = require('path');
const questionRoutes = require('./questions');
const justinRoutes = require('./justin');

const constructorMethod = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(path.resolve('static/home.html'));
  });
  app.use('/questions', questionRoutes);
  app.use('/justin', justinRoutes);
  app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
  });
};

module.exports = constructorMethod;