const path = require('path');
const questionRoutes = require('./questions');
const justinRoutes = require('./justin');
const frankRoutes = require('./frank');
const resultRoutes = require('./results'); 

const constructorMethod = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(path.resolve('static/justin/RecrUIter-Home.html'));
  });
  app.use('/questions', questionRoutes);
  app.use('/justin', justinRoutes);
  app.use('/frank', frankRoutes);
  app.use('/results', resultRoutes); 
  app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
  });
};

module.exports = constructorMethod;
