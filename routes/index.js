const path = require('path');
const questionRoutes = require('./questions');
const resultRoutes = require('./results');

const constructorMethod = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(path.resolve('static/login.html'));
  });
  app.get('/resetpwd', (req, res) => {
    res.sendFile(path.resolve('static/resetpwd.html'));
  });
  app.get('/signup', (req, res) => {
    res.sendFile(path.resolve('static/signup.html'));
  });
  app.get('/about', (req, res) => {
    res.sendFile(path.resolve('static/about.html'));
  });
  app.use('/questions', questionRoutes);
  app.use('/results', resultRoutes);
  app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
  });
};

module.exports = constructorMethod;
